import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VimeoFolderMeta, VimeoItemsModel, VimeoService, VimeoVideoMeta } from './vimeo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class VimeoFolderPathService {
	constructor(
		private service: VimeoService,
		private router: Router,
		private ar: ActivatedRoute,
	) { }

	folderPath$ = new BehaviorSubject<(VimeoFolderMeta | VimeoVideoMeta)[]>([]);

	setFolderPath(folder: VimeoItemsModel | null, index?: number) {
		let curr = this.folderPath$.value;
		!index ? (folder?.folder ? curr.push(folder?.folder) : curr) : curr.splice(index || 0);
		this.folderPath$.next(curr);
	}
	setVideoPath(video: VimeoItemsModel | null) {
		// this.currentView = 'video';
		// let curr = this.folderPath$.value;
		// video?.video ? curr.push(video?.video) : null;
		// this.currentVideo = video?.video;
		// this.folderPath$.next(curr);
		console.log(`sending data::`, video);
		this.router.navigate([ '../player' ], { relativeTo: this.ar, state: { videoData: video?.video } })
	}
}


