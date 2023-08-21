import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages/pages.component';
import { RoughComponent } from './rough/rough.component';

const routes: Routes = [
	{
		path: 'landing',
		component: LandingComponent,
		children: [
			{
				path: 'rough',
				component: RoughComponent,
			},
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
export class ButterCmsRoutingModule { }
