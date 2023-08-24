import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VimeoVideoMeta } from 'src/app/service/video-player/vimeo/vimeo.service';

@Component({
	selector: 'app-vimeo-video-player',
	templateUrl: './vimeo-video-player.component.html',
	styleUrls: [ './vimeo-video-player.component.scss' ]
})
export class VimeoVideoPlayerComponent {
	videoData!: VimeoVideoMeta;
	videoId!: number;

	constructor(
		private router: Router,
		private location: Location,
	) {
		let data = this.router.getCurrentNavigation()?.extras?.state?.[ 'videoData' ] as VimeoVideoMeta;
		if (data) {
			this.videoData = data;
			this.videoId = parseInt(data.uri.split('/videos/').join(''));
			debugger;
		}
		else location.back();
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
	}
}
