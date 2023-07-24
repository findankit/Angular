import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { AddNewFieldsComponent } from './add-new-fields/add-new-fields.component';
import { ComponentModule } from '../component/component.module';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';


@NgModule({
  declarations: [
    AddNewFieldsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
		ComponentModule,
		FormsModule,
		UtilsModule
  ]
})
export class FormModule { }
