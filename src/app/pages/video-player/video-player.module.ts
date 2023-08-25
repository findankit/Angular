import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { ComponentModule } from '../component/component.module';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VimeoVideoPlayerComponent } from './vimeo-video-player/vimeo-video-player.component';
import { VimeoLayoutComponent } from './vimeo-layout/vimeo-layout.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    VimeoPlayerComponent,
    VimeoVideoPlayerComponent,
    VimeoLayoutComponent,
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
		ComponentModule,
		MatIconModule
  ]
})
export class VideoPlayerModule { }
