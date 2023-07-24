import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFieldComponent } from './new-field/new-field.component';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';



@NgModule({
  declarations: [
    NewFieldComponent
  ],
  imports: [
    CommonModule,
		FormsModule,
		UtilsModule
  ],
	exports: [
		NewFieldComponent
	]
})
export class ComponentModule { }
