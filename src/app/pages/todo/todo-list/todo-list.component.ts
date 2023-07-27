import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { ResponseDataList } from 'src/app/service/common/response';
import { TodoModel } from 'src/app/service/forms/add-new-form/add-new-form';
import { AddNewFormService } from 'src/app/service/forms/add-new-form/add-new-form.service';
import { TodoService } from 'src/app/service/todo/todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent {

	get showAddButton() {
		return Object.keys(this.bulkUpdateObj).length || this.model.data.some(el => !el._id)
	}
	constructor(
		public service: TodoService,
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

	@ViewChildren('multiChildInput') multiChildInput!: QueryList<TodoComponent>;
	submit(form: NgForm) {
		let formcheck = validateNgForm(form, [ this.multiChildInput ]);
		if (formcheck.invalid) return;

		let updateData = Object.values(this.bulkUpdateObj);
		let createList = this.model.data.filter(el => !el._id);

		if (updateData.length) {
			this.service.bulkUpdateTodo(updateData)
				.pipe(catchError(v => of(v.error)))
				.subscribe(event => {
					this.service.editMode$.next(false);
					this.bulkUpdateObj = {};
					if(!createList.length) this.getTodoList();
				})
		}

		if (createList.length) {
			this.service.createTodoList(createList)
				.pipe(catchError(v => of(v.error)))
				.subscribe(event => {
					this.bulkUpdateObj = {};
					this.multiChildInput.forEach(el => {
						this.getTodoList();
					})
				});
		}
	}

	deleteTodo(index: number, todo: TodoModel) {
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

	bulkUpdateObj: { [ key: number ]: TodoModel } = {};
	todoDataChange(todo: TodoModel, i: number) {
		this.bulkUpdateObj[ i ] = todo;
	}
}
