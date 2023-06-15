import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { FormComponent } from './form/form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    TemplateFormsRoutingModule
  ]
})
export class TemplateFormsModule { }
