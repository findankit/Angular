import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { TodoModel } from 'src/app/service/forms/add-new-form/add-new-form';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TodoComponent),
			multi: true,
		}
	]
})
export class TodoComponent extends BaseControlValueAccessor<TodoModel> {

	@Input() todo!: TodoModel;
	@Output() onDelete = new EventEmitter<any>;

	editToggleCount = 1;
	isEditing = false;

	constructor(
		private service: TodoService,
	) {super()}

	ngOnInit() {
		this.service.editMode$.subscribe((event: boolean) => {
			if(!this.todo._id) {
				this.isEditing = true;
				return;
			}
			this.editToggleCount++;
			this.isEditing = event;
		})
	}

	toggleEdit() {
		// if(this.service.editMode$.value) return;
		this.editToggleCount = 1;
		this.isEditing = !this.isEditing;
	}

	delete() {
		this.onDelete.emit();
	}

	update(form: NgForm) {
		let validate = validateNgForm(form);
		if(validate.invalid) return;
		
		if(this.todo._id) {
			this.service.updateTodo(this.todo).subscribe(event => {
				this.toggleEdit();
			});
		} else {
			this.service.createTodoList([this.todo]).subscribe(event => {
				this.toggleEdit();
			});
		}
	}

	@ViewChild('form')form!: NgForm;
	validate() {
		validateNgForm(this.form);
	}

	todoOptions = this.service.todoStatusOptions;
}