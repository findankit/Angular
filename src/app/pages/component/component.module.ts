import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFieldComponent } from './new-field/new-field.component';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ModalsModule } from './modals/modals.module';



@NgModule({
  declarations: [
    NewFieldComponent
  ],
  imports: [
    CommonModule,
		FormsModule,
		UtilsModule,
		ModalsModule,
  ],
	exports: [
		NewFieldComponent,
		ModalsModule
	]
})
export class ComponentModule { }
