import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ModalsModule } from './modals/modals.module';
import { SelectModule } from './select/select.module';
import { PlayersModule } from './players/players.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
		FormsModule,
		UtilsModule,
		ModalsModule,
		SelectModule,
  ],
	exports: [
		ModalsModule,
		SelectModule,
		PlayersModule
	]
})
export class ComponentModule { }
