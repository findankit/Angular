import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RndTopicsComponent } from './rnd-topics/rnd-topics.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{
		path: 'topics',
		component: RndTopicsComponent
	},
	{
		path: 'test',
		component: TestComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RndRoutingModule { }
