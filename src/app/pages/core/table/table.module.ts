import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TableComponent,
    TableActionsComponent
  ],
  imports: [
    CommonModule,
		UtilsModule,
		MatIconModule
  ],
	exports: [
		TableComponent,
		TableActionsComponent
	]
})
export class TableModule { }
