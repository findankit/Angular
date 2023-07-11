import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'account',
				loadChildren: () => import('./pages/account/account.module').then(e => e.AccountModule)
			},
			{
				path: 'topics',
				loadChildren: () => import('./pages/topics/topics.module').then(e => e.TopicsModule)
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
