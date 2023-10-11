import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WsRoutingModule } from './ws-routing.module';
import { NodeJsDebugComponent } from './node-js-debug/node-js-debug.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NodeJsDebugComponent
  ],
  imports: [
    CommonModule,
    WsRoutingModule,
		FormsModule,
  ]
})
export class WsModule { }
