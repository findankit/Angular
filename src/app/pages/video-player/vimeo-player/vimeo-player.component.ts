import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VimeoItemsModel, Paginated, VimeoFolderMeta, VimeoService, VimeoVideoMeta } from 'src/app/service/video-player/vimeo/vimeo.service';

@Component({
	selector: 'app-vimeo-player',
	templateUrl: './vimeo-player.component.html',
	styleUrls: [ './vimeo-player.component.scss' ]
})
export class VimeoPlayerComponent {

	constructor(
		private service: VimeoService,
		private router: Router,
		private ar: ActivatedRoute,
	) { }

	foldersModel: VimeoItemsModel[] = [];
	folderPath: (VimeoFolderMeta | VimeoVideoMeta)[] = [];
	currentView: 'folder' | 'video' = 'folder';
	currentVideo?: VimeoVideoMeta;

	ngOnInit() {
		if (!this.service.vimeoUserId) {
			this.service.fetchVimeoUser().subscribe(event => {
				this.service.endpoints = event.metadata.connections;
				this.service.model = event;
				this._ngOnInit();
			})
		} else this._ngOnInit();
	}

	_ngOnInit() {
		this.service.folderPath$.subscribe(data => {
			if (this.currentView == 'video') {
				return;
			}
			this.folderPath = data;
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
		this.service.getVimeoData(this.service.endpoints.folders_root.uri).subscribe(event => {
			this.foldersModel = event.data;
			// event.data[0].folder.metadata.connections.items
		})
	}

	getFolderItems(uri: string) {
		this.service.getVimeoData(uri).subscribe(event => {
			this.foldersModel = event.data;
		})
	}

	setFolderPath(folder: VimeoItemsModel | null, index?: number) {
		this.currentView = 'folder';
		let curr = this.service.folderPath$.value;
		!index ? (folder?.folder ? curr.push(folder?.folder) : curr) : curr.splice(index || 0);
		this.service.folderPath$.next(curr);
	}
	setVideoPath(video: VimeoItemsModel | null) {
		// this.currentView = 'video';
		// let curr = this.service.folderPath$.value;
		// video?.video ? curr.push(video?.video) : null;
		// this.currentVideo = video?.video;
		// this.service.folderPath$.next(curr);
		console.log(`sending data::`, video);
		this.router.navigate(['../player'], {relativeTo: this.ar, state: {videoData: video?.video}})
	}

	log(...data: any) {
		console.log(...data);
	}

	ngOnDestroy() {

	}

	backgroundImg(meta?: VimeoVideoMeta, size: number = 200) {
		let perfectSize: any = meta?.pictures.sizes.filter(el => el.width <= size)[ 0 ];
		if (!perfectSize) perfectSize = meta?.pictures.sizes.at(-1);
		return `url('${perfectSize.link}')`;
	}
}
