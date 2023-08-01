import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';
import { InputDirective } from './directive/input.directive';
import { IconsComponent } from './component/icons/icons.component';
import { TransformPipe } from './pipe/transform.pipe';
import { ProperHeadingPipe } from './pipe/proper-heading.pipe';



@NgModule({
	declarations: [
		ValidationMessageComponent,
		InputDirective,
		IconsComponent,
		TransformPipe,
		ProperHeadingPipe,
	],
	imports: [
		CommonModule,
	],
	exports: [
		ValidationMessageComponent,
		InputDirective,
		IconsComponent,
		TransformPipe,
		ProperHeadingPipe
	]
})
export class UtilsModule { }
