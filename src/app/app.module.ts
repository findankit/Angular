import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateInputComponent } from './helper/core/validate-input/validate-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { ComponentModule } from './pages/component/component.module';
import { UrlPrefixInterceptor } from './utils/interceptor/url-prefix.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ValidateInputComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		UtilsModule,
		HttpClientModule,
	],
	providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlPrefixInterceptor,
      multi: true
    },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
