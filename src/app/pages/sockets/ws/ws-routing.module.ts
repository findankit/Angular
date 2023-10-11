import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeJsDebugComponent } from './node-js-debug/node-js-debug.component';


const routes: Routes = [
	{
		path: 'node-js-debug',
		component: NodeJsDebugComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WsRoutingModule { }
