import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VimeoCreateFolderModel, VimeoFolderPathService } from 'src/app/service/video-player/vimeo/vimeo-folder-path.service';
import { VimeoService } from 'src/app/service/video-player/vimeo/vimeo.service';

@Component({
  selector: 'app-vimeo-manage-items',
  templateUrl: './vimeo-manage-items.component.html',
  styleUrls: ['./vimeo-manage-items.component.scss']
})
export class VimeoManageItemsComponent {
	showModal = false;
	addWhat: 'folder' | 'video' = 'folder';

	folderModel = new VimeoCreateFolderModel();
 
	constructor(
		private folderService: VimeoFolderPathService,
		private vimeoService: VimeoService,
	) {}

	
	createItem(form: NgForm) {
		if(this.addWhat == 'folder') {
			debugger;
			this.folderModel.parent_folder_uri = this.folderService.folderPath$.value.at(-1)?.uri || null;
			this.folderService.createFolder(this.folderModel).subscribe(data => {
				this.showModal = false;
				this.folderService.folderPath$.next(this.folderService.folderPath$.value);
			})
		}
	}
}
