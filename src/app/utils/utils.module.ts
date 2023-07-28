import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';
import { InputDirective } from './directive/input.directive';
import { IconsComponent } from './component/icons/icons.component';
import { TransformPipe } from './pipe/transform.pipe';



@NgModule({
	declarations: [
		ValidationMessageComponent,
		InputDirective,
		IconsComponent,
  TransformPipe,
	],
	imports: [
		CommonModule,
	],
	exports: [
		ValidationMessageComponent,
		InputDirective,
		IconsComponent,
		TransformPipe,
	]
})
export class UtilsModule { }
