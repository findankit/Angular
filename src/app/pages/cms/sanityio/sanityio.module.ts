import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanityioRoutingModule } from './sanityio-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    LandingComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SanityioRoutingModule
  ]
})
export class SanityioModule { }
