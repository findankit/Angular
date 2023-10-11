import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RndRoutingModule } from './rnd-routing.module';
import { RndTopicsComponent } from './rnd-topics/rnd-topics.component';


@NgModule({
  declarations: [
    RndTopicsComponent
  ],
  imports: [
    CommonModule,
    RndRoutingModule
  ]
})
export class RndModule { }
