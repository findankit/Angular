import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'account',
		loadChildren: () => import('./pages/account/account.module').then(e => e.AccountModule)
	},
	{
		path: '',
		children: [
			{
				path: 'topics',
				loadChildren: () => import('./pages/topics/topics.module').then(e => e.TopicsModule)
			},
			{
				path: 'forms',
				loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
