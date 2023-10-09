import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommRoutingModule } from './ecomm-routing.module';
import { EcommLayoutComponent } from './ecomm-layout/ecomm-layout.component';


@NgModule({
  declarations: [
    EcommLayoutComponent
  ],
  imports: [
    CommonModule,
    EcommRoutingModule
  ]
})
export class EcommModule { }
