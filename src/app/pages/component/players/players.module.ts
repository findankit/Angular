import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VimeoComponent } from './vimeo/vimeo.component';



@NgModule({
  declarations: [
    VimeoComponent
  ],
  imports: [
    CommonModule
  ],
	exports: [
		VimeoComponent,
	]
})
export class PlayersModule { }
