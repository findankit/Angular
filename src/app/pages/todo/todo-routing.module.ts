import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCategoryComponent } from './todo-category/todo-category.component';

const routes: Routes = [
	{
		path: 'list',
		component: TodoListComponent,
	},
	{
		path: 'category',
		component: TodoCategoryComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
