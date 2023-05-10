import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoughRoutingModule } from './rough-routing.module';
import { RoughPageComponent } from './rough-page/rough-page.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    RoughPageComponent
  ],
  imports: [
    CommonModule,
    RoughRoutingModule,
	FormsModule,
	NgSelectModule
  ]
})
export class RoughModule { }
