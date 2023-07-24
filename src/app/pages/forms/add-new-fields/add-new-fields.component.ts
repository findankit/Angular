import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { ResponseDataList } from 'src/app/service/common/response';
import { TodoModel } from 'src/app/service/forms/add-new-form/add-new-form';
import { AddNewFormService } from 'src/app/service/forms/add-new-form/add-new-form.service';

@Component({
  selector: 'app-add-new-fields',
  templateUrl: './add-new-fields.component.html',
  styleUrls: ['./add-new-fields.component.scss']
})
export class AddNewFieldsComponent {

	constructor(
		private service: AddNewFormService,
	){}
	
	model = new ResponseDataList<TodoModel>();
	deleted: TodoModel[] = [];

	ngOnInit() {
		this.getTodoList();
	}

	getTodoList() {
		this.service.getTodoList().subscribe(event => {
			if(event.success) {
				this.model = event;
			}
		})
	}

	addTodo(event: Event) {
		event.preventDefault();
		let newTodo = new TodoModel();
		this.model.data.push(newTodo);
	}
	
	showData = false;
	@ViewChildren('multiChildInput') multiChildInput!: QueryList<ElementRef<HTMLInputElement>>;
	submit(form: NgForm) {
		this.showData = true;
		validateNgForm(form, [this.multiChildInput]);
		console.log(this.multiChildInput);
	}

	deleteTodo(event: number) {
		let deletedItem = this.model.data.splice(event, 1);
	}
}
