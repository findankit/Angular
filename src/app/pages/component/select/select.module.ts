import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectComponent } from './select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgSelectComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
		NgSelectModule,
		MatSelectModule,
		FormsModule
  ],
  exports: [
		NgSelectComponent,
		SelectComponent,
  ],
})
export class SelectModule { }
