import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { NoTopicFoundComponent } from './no-topic-found/no-topic-found.component';

const routes: Routes = [
	{
		path: '',
		component: TopicsComponent,
	},
	{
		path: '**',
		component: NoTopicFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
