import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButterCmsRoutingModule } from './butter-cms-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    LandingComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ButterCmsRoutingModule
  ],
	providers: [
	]
})
export class ButterCmsModule { }
