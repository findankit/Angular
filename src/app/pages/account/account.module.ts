import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		LoginComponent,
		Login2Component,
	],
	imports: [
		CommonModule,
		AccountRoutingModule,
		ReactiveFormsModule,
		UtilsModule,
		FormsModule
	]
})
export class AccountModule { }
