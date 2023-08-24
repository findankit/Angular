import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarLayoutComponent } from './pages/layout/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
	{
		path: 'account',
		loadChildren: () => import('./pages/account/account.module').then(e => e.AccountModule)
	},
	{
		path: '',
		component: SidebarLayoutComponent,
		children: [
			{
				path: 'topics',
				loadChildren: () => import('./pages/topics/topics.module').then(e => e.TopicsModule)
			},
			{
				path: 'forms',
				loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormModule)
			},
			{
				path: 'todo',
				loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule)
			},
			{
				path: 'cms',
				loadChildren: () => import('./pages/cms/cms.module').then(m => m.CmsModule)
			},
			{
				path: 'video-player',
				loadChildren: () => import('./pages/video-player/video-player.module').then(m => m.VideoPlayerModule)
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
