import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/account/login/login.component';
import { ValidateInputComponent } from './helper/core/validate-input/validate-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
