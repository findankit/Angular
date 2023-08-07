import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButterCmsRoutingModule } from './butter-cms-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButterCmsInterceptorInterceptor } from 'src/app/utils/interceptor/butter-cms-interceptor.interceptor';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ButterCmsRoutingModule
  ],
	providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ButterCmsInterceptorInterceptor,
      multi: true
    },
	]
})
export class ButterCmsModule { }
