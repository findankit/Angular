import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigCommerceRoutingModule } from './big-commerce-routing.module';
import { BigCommLayoutComponent } from './big-comm-layout/big-comm-layout.component';


@NgModule({
  declarations: [
    BigCommLayoutComponent
  ],
  imports: [
    CommonModule,
    BigCommerceRoutingModule
  ]
})
export class BigCommerceModule { }
