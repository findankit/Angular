import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigCommLayoutComponent } from './big-commerce/big-comm-layout/big-comm-layout.component';

const routes: Routes = [
	{
		path: 'big-commerce',
		component: BigCommLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./big-commerce/big-commerce.module').then(m => m.BigCommerceModule),
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
