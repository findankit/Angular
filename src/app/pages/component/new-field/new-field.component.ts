import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { TodoModel } from 'src/app/service/forms/add-new-form/add-new-form';
import { AddNewFormService } from 'src/app/service/forms/add-new-form/add-new-form.service';

@Component({
	selector: 'app-new-field',
	templateUrl: './new-field.component.html',
	styleUrls: [ './new-field.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NewFieldComponent),
			multi: true,
		}
	]
})
export class NewFieldComponent extends BaseControlValueAccessor<TodoModel> {
	@Input() todo!: TodoModel;
	@Input() id!: number;
	@Output() onDelete = new EventEmitter<number>;

	constructor(
		private service: AddNewFormService
	) {super()}

	ngOnInit() {
		this.todo.todo
	}

	delete() {
		this.onDelete.emit(this.id);
	}

	@ViewChild('form')form!: NgForm;
	validate() {
		validateNgForm(this.form);
	}

	todoOptions = this.service.todoStatusOptions;
}
