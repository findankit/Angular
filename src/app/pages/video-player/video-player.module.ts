import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { ComponentModule } from '../component/component.module';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VimeoVideoPlayerComponent } from './vimeo-video-player/vimeo-video-player.component';


@NgModule({
  declarations: [
    VimeoPlayerComponent,
    VimeoVideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
		ComponentModule,
  ]
})
export class VideoPlayerModule { }
