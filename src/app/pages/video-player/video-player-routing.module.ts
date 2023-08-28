import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VimeoVideoPlayerComponent } from './vimeo-video-player/vimeo-video-player.component';
import { VimeoLayoutComponent } from './vimeo-layout/vimeo-layout.component';
import { VimeoManageItemsComponent } from './vimeo-manage-items/vimeo-manage-items.component';

const routes: Routes = [
	{
		path: '',
		component: VimeoLayoutComponent,
		children: [
			{
				path: 'vimeo',
				component: VimeoPlayerComponent,
				children: [
					{
						path: '',
						component: VimeoManageItemsComponent
					}
				]
			},
			{
				path: 'player',
				component: VimeoVideoPlayerComponent,
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule { }
