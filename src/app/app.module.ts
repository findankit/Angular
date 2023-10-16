import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateInputComponent } from './helper/core/validate-input/validate-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { UrlPrefixInterceptor } from './utils/interceptor/url-prefix.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './pages/layout/layout.module';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


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
	],
	providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlPrefixInterceptor,
      multi: true
    },
		provideAnimations(),
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
