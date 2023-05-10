import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoughPageComponent } from './rough-page/rough-page.component';

const routes: Routes = [
	{
		path: '',
		component: RoughPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RoughRoutingModule { }
