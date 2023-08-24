import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VimeoVideoPlayerComponent } from './vimeo-video-player/vimeo-video-player.component';

const routes: Routes = [
	{
		path: 'vimeo',
		component: VimeoPlayerComponent,
	},
	{
		path: 'player',
		component: VimeoVideoPlayerComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule { }
