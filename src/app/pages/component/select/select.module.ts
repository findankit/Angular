import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    NgSelectComponent
  ],
  imports: [
    CommonModule,
		NgSelectModule,
  ],
  exports: [
		NgSelectComponent,
  ],
})
export class SelectModule { }
