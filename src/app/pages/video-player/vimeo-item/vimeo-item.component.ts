import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VimeoItemsModel, VimeoVideoMeta } from 'src/app/service/video-player/vimeo/vimeo.service';

@Component({
  selector: 'app-vimeo-item',
  templateUrl: './vimeo-item.component.html',
  styleUrls: ['./vimeo-item.component.scss']
})
export class VimeoItemComponent {
	@Input() vimeoItem!: VimeoItemsModel;
	@Output() onVideoClick = new EventEmitter<VimeoItemsModel>();
	@Output() onFolderClick = new EventEmitter<VimeoItemsModel>();
	@Output() onDelete = new EventEmitter<VimeoItemsModel>();

	constructor(

	) {}
	
	backgroundImg(meta?: VimeoVideoMeta, size: number = 200): string {
		let perfectSize: any = meta?.pictures.sizes.filter(el => el.width <= size)[ 0 ];
		if (!perfectSize) perfectSize = meta?.pictures.sizes.at(-1);
		return `url('${perfectSize.link}')`;
	}

	itemClick(item?: string): void {
		if(item === 'video') {
			this.onVideoClick.emit(this.vimeoItem);
		} else {
			this.onFolderClick.emit(this.vimeoItem);
		}
	}
}
