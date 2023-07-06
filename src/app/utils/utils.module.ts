import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';
import { InputDirective } from './directive/input.directive';



@NgModule({
	declarations: [
		ValidationMessageComponent,
  InputDirective,
	],
	imports: [
		CommonModule,
	],
	exports: [
		ValidationMessageComponent,
		InputDirective,
	]
})
export class UtilsModule { }
