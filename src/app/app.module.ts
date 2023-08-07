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
import { RouterModule } from '@angular/router';
import { LayoutModule } from './pages/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ButterCmsModule } from './pages/cms/butter-cms/butter-cms.module';
import { CmsModule } from './pages/cms/cms.module';


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
		LayoutModule,
		BrowserAnimationsModule,
		MatIconModule,
		// ButterCmsModule,
		// CmsModule,
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
