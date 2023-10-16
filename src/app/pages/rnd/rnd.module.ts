import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RndRoutingModule } from './rnd-routing.module';
import { RndTopicsComponent } from './rnd-topics/rnd-topics.component';
import { RndTopicItemComponent } from './rnd-topic-item/rnd-topic-item.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    RndTopicsComponent,
    RndTopicItemComponent,
    TestComponent
  ],
  imports: [
		CommonModule,
    RndRoutingModule
  ]
})
export class RndModule { }
