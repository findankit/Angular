import { Component, HostListener } from '@angular/core';
import { ResponseDataList } from 'src/app/service/common/response';
import { CategoryModel } from 'src/app/service/todo/category';
import { CategoryService } from 'src/app/service/todo/category.service';
import { TableConfig } from '../../core/table/table/table.component';

@Component({
	selector: 'app-todo-category',
	templateUrl: './todo-category.component.html',
	styleUrls: [ './todo-category.component.scss' ]
})
export class TodoCategoryComponent {
	constructor(
		private service: CategoryService,
	) { }

	model = new ResponseDataList<CategoryModel>();
	tableConfig = new TableConfig();
	showModal = false;

	ngOnInit() {
		this.getCategoryList();
	}

	deleting(data: CustomEvent<CategoryModel>) {
		console.log(data.detail);
		alert('deleted');
	}

	getCategoryList() {
		this.service.getCategoryList().subscribe(event => {
			this.model = event;
		})
	}
}
