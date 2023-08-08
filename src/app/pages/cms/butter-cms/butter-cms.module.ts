import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButterCmsRoutingModule } from './butter-cms-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ButterCmsRoutingModule
  ],
	providers: [
	]
})
export class ButterCmsModule { }
