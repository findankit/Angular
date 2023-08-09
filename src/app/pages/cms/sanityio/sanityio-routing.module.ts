import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
	{
		path: 'landing',
		component: LandingComponent,
		children: [
			{
				path: ':page',
				component: PagesComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanityioRoutingModule { }
