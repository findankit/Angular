import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { VimeoFolderPathService } from 'src/app/service/video-player/vimeo/vimeo-folder-path.service';
import { VimeoItemsModel, Paginated, VimeoFolderMeta, VimeoService, VimeoVideoMeta, VimeoUserModel } from 'src/app/service/video-player/vimeo/vimeo.service';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-vimeo-player',
	templateUrl: './vimeo-player.component.html',
	styleUrls: [ './vimeo-player.component.scss' ]
})
export class VimeoPlayerComponent {
	sink = new SubSink();

	constructor(
		private service: VimeoService,
		private router: Router,
		private ar: ActivatedRoute,
		private vimeoFolderService: VimeoFolderPathService,
	) { }

	vimeoItems: VimeoItemsModel[] = [];
	// folderPath: (VimeoFolderMeta | VimeoVideoMeta)[] = [];
	currentView: 'folder' | 'video' = 'folder';
	noNetwork = false;

	@HostListener('window:online', [ '$event' ])
	isOnline() {
		setTimeout(() => {
			this.init();
		}, 1000);
	}


	ngOnInit() {
		this.init();
	}

	init() {
		this.log(this.service.model);
		if (!this.service.model.uri) {
			this.service.fetchVimeoUser()
				.pipe(catchError(v => of(v.errors)))
				.subscribe((event: VimeoUserModel | undefined) => {
					if (event == undefined) {
						console.error('No internet.');
						return;
					}
					this.service.endpoints = event.metadata.connections;
					this.service.model = event;
					this.service.user_id = +event.uri.split('/users/').join('').trim();
					this._ngOnInit();
				})
		} else this._ngOnInit();
	}

	_ngOnInit() {
		this.sink.sink = this.vimeoFolderService.folderPath$
			.subscribe(data => {
				if (this.noNetwork) {
					this.noNetwork = false;
					return;
				}
				if (this.currentView == 'video') {
					// return;
				}
				// this.folderPath = data;
				// this.vimeoFolderService.folderPath$.next(data);
				if (!data.length) {
					this.getRootFolders();
				} else {
					let currentFolder = data.at(-1);
					let path = (currentFolder as VimeoFolderMeta)?.metadata.connections.items.uri;
					if (path) this.getFolderItems(path);
				}
			})
	}

	getRootFolders() {
		this.service.getVimeoData(this.service.endpoints.folders_root.uri)
			.pipe(catchError(v => of(v.errors)))
			.subscribe(event => {
				this.vimeoItems = event.data;
				// event.data[0].folder.metadata.connections.items
			})
	}

	getFolderItems(uri: string) {
		this.service.getVimeoData(uri)
			.pipe(catchError(v => of(v.errors)))
			.subscribe(event => {
				this.noNetwork = event == undefined;
				if (this.noNetwork) {
					this.setFolderPath(null, this.vimeoFolderService.folderPath$.value.length - 1);
				}
				this.vimeoItems = event.data;
			})
	}

	setFolderPath(folder: VimeoItemsModel | null, index?: number) {
		this.currentView = 'folder';
		let curr = this.vimeoFolderService.folderPath$.value;
		if (index) curr.splice(index || 0)
		else if (folder?.folder) {
			let isDuplicate = curr.some(el => el.uri == folder.folder?.uri);
			if (!isDuplicate) curr.push(folder.folder);
		}
		// !index ? (folder?.folder ? curr.push(folder?.folder) : curr) : curr.splice(index || 0);
		this.vimeoFolderService.folderPath$.next(curr);
	}
	setVideoPath(video: VimeoItemsModel | null) {
		this.currentView = 'video';
		let curr = this.vimeoFolderService.folderPath$.value;
		if (video?.video) {
			let isDuplicate = curr.some(el => el.uri == video.video?.uri);
			if (!isDuplicate) curr.push(video.video);
		}
		// video?.video ? curr.push(video?.video) : null;
		this.vimeoFolderService.folderPath$.next(curr);
		console.log(`sending data::`, video);
		this.router.navigate([ '../player' ], { relativeTo: this.ar, state: { videoData: video?.video } })
	}

	log = console.log;

	ngOnDestroy() {
		this.sink.unsubscribe();
	}

	backgroundImg(meta?: VimeoVideoMeta, size: number = 200) {
		let perfectSize: any = meta?.pictures.sizes.filter(el => el.width <= size)[ 0 ];
		if (!perfectSize) perfectSize = meta?.pictures.sizes.at(-1);
		return `url('${perfectSize.link}')`;
	}
}
