import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoughPageComponent } from './rough-page/rough-page.component';
import { RoughComponent } from './rough/rough.component';

const routes: Routes = [
	{
		path: '',
		component: RoughPageComponent
	},
	{
		path: 'template-forms',
		component: RoughComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./rough.module').then(v => v.RoughModule),
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RoughRoutingModule { }
