import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
		FormsModule,
		UtilsModule,
		MatIconModule
  ]
})
export class TodoModule { }
