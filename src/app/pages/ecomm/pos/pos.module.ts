import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosLayoutComponent } from './pos-layout/pos-layout.component';


@NgModule({
  declarations: [
    PosLayoutComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
