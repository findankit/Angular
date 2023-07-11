import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics/topics.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { NoTopicFoundComponent } from './no-topic-found/no-topic-found.component';


@NgModule({
  declarations: [
    TopicsComponent,
    NoTopicFoundComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
		UtilsModule,
  ]
})
export class TopicsModule { }
