import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UtilsModule } from 'src/app/utils/utils.module';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AccountRoutingModule,
		UtilsModule
	]
})
export class AccountModule { }
