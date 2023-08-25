import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VimeoFolderPathService } from 'src/app/service/video-player/vimeo/vimeo-folder-path.service';
import { VimeoItemsModel, Paginated, VimeoFolderMeta, VimeoService, VimeoVideoMeta } from 'src/app/service/video-player/vimeo/vimeo.service';

@Component({
  selector: 'app-vimeo-layout',
  templateUrl: './vimeo-layout.component.html',
  styleUrls: ['./vimeo-layout.component.scss']
})
export class VimeoLayoutComponent {
	constructor(
		private vimeoFolderService: VimeoFolderPathService,
		private router: Router,
	) { }

	folderPath$ = this.vimeoFolderService.folderPath$;

	ngOnInit() {
	}

	navigateTo(index: number | null) {
		this.router.navigate(['/video-player/vimeo']);
		let path = this.folderPath$.value;
		this.vimeoFolderService.folderPath$.next(path.splice(0, index == null ? 0 : index+1));
	}

}
