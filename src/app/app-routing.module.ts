import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'app',
	},
	{
		path: 'app',
		component: HomeComponent,
		children: [
			{
				path: 'todo',
				loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule),
			},
			{
				path: 'rough',
				loadChildren: () => import('./pages/rough/rough.module').then(m => m.RoughModule),
			},

		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
