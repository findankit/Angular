import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';
import { MatIconModule } from '@angular/material/icon';
import { TodoCategoryComponent } from './todo-category/todo-category.component';
import { CoreModule } from '../core/core.module';
import { ComponentModule } from '../component/component.module';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoCategoryComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
		FormsModule,
		UtilsModule,
		MatIconModule,
		CoreModule,
		ComponentModule,
		MatSelectModule,
		DragDropModule,
  ]
})
export class TodoModule { }
