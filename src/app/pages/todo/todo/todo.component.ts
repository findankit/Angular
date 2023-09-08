import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { CategoryService } from 'src/app/service/todo/category.service';
import { TodoModel, TodoStatus } from 'src/app/service/todo/todo';
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
	@ViewChild('form') myform!: NgForm;
	@Input() todo = new TodoModel();
	@Output() onDelete = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onValueChange = new EventEmitter<TodoModel>;

	editToggleCount = 1;
	isEditing = false;

	constructor(
		private service: TodoService,
		private categoryService: CategoryService,
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

	ngAfterViewInit() {
		this.myform.valueChanges?.subscribe((event: TodoModel) => {
			if(this.todo._id)this.onValueChange.emit(this.todo);
		})
	}

	toggleEdit() {
		this.editToggleCount = 1;
		this.isEditing = !this.isEditing;
	}

	delete(event: CustomEvent<TodoModel>) {
		this.onDelete.emit();
	}

	_saved() {
		this.onSave.emit();
	}
	update(form: NgForm) {
		let validate = validateNgForm(form);
		if(validate.invalid) return;

		if(this.todo._id) {
			this.service.updateTodo(this.todo).subscribe(event => {
				this.toggleEdit();
				this._saved();
			});
		} else {
			this.service.createTodoList([this.todo]).subscribe(event => {
				this.toggleEdit();
				this._saved();
			});
		}
	}

	@ViewChild('form')form!: NgForm;
	validate() {
		validateNgForm(this.form);
	}

	todoOptions = this.service.todoStatusOptions;

	getNestedCategory() {
		this.categoryService.getNestedCategories().subscribe(data => {
			
		})
	}
}