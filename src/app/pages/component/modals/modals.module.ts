import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanillaModalComponent } from './vanilla-modal/vanilla-modal.component';
import { TableModule } from '../../core/table/table.module';



@NgModule({
  declarations: [
    VanillaModalComponent
  ],
  imports: [
    CommonModule,
		TableModule,
  ],
	exports: [
		VanillaModalComponent
	]
})
export class ModalsModule { }
