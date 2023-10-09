import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigCommLayoutComponent } from './pos/big-commerce/big-comm-layout/big-comm-layout.component';

const routes: Routes = [
	{
		path: 'pos',
		component: BigCommLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./pos/pos.module').then(m => m.PosModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EcommRoutingModule { }
