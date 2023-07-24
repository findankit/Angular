import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewFieldsComponent } from './add-new-fields/add-new-fields.component';

const routes: Routes = [
	{
		path: 'add-new-field',
		component: AddNewFieldsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
