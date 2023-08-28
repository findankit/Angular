import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { ComponentModule } from '../component/component.module';
import { VimeoPlayerComponent } from './vimeo-player/vimeo-player.component';
import { VimeoVideoPlayerComponent } from './vimeo-video-player/vimeo-video-player.component';
import { VimeoLayoutComponent } from './vimeo-layout/vimeo-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { VimeoManageItemsComponent } from './vimeo-manage-items/vimeo-manage-items.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VimeoPlayerComponent,
    VimeoVideoPlayerComponent,
    VimeoLayoutComponent,
    VimeoManageItemsComponent,
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
		ComponentModule,
		MatIconModule,
		UtilsModule,
		FormsModule,
  ]
})
export class VideoPlayerModule { }
