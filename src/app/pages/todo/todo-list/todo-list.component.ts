import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { ResponseDataList } from 'src/app/service/common/response';
import { TodoModel } from 'src/app/service/forms/add-new-form/add-new-form';
import { AddNewFormService } from 'src/app/service/forms/add-new-form/add-new-form.service';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


	constructor(
		private service: TodoService,
	) { }

	model = new ResponseDataList<TodoModel>();
	deleted: TodoModel[] = [];

	ngOnInit() {
		this.getTodoList();
	}

	getTodoList() {
		this.service.getTodoList().subscribe(event => {
			if (event.success) {
				this.model = event;
			}
		})
	}

	@ViewChildren('multiChildInput') multiChildInput!: QueryList<ElementRef<HTMLInputElement>>;
	submit(form: NgForm) {
		let formcheck = validateNgForm(form, [ this.multiChildInput ]);
		if (formcheck.invalid) return;
		this.service.createTodoList(this.model.data.filter(el => !el._id))
			.pipe(catchError(v => of(v.error)))
			.subscribe(event => {
				alert(event);
			});
	}

	deleteTodo(index: number, todo: TodoModel) {
		let deletedItem = this.model.data.splice(index, 1);
		if (todo._id) this.service.deleteTodo(todo._id).subscribe(event => {
			if (event.success) {

			}
		})
		this.model.data.splice(index, 1);
	}

	
	addTodo(event: Event) {
		event.preventDefault();
		let newTodo = new TodoModel();
		this.model.data.push(newTodo);
	}

	editMode$ = this.service.editMode$;
	editTodos() {
		this.service.editMode$.next(!this.service.editMode$.value);
	}
}
