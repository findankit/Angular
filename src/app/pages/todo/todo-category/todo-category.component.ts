import { Component } from '@angular/core';
import { ResponseDataList } from 'src/app/service/common/response';
import { CategoryModel } from 'src/app/service/todo/category';
import { CategoryService } from 'src/app/service/todo/category.service';
import { TableConfig } from '../../core/table/table/table.component';

@Component({
  selector: 'app-todo-category',
  templateUrl: './todo-category.component.html',
  styleUrls: ['./todo-category.component.scss']
})
export class TodoCategoryComponent {
	constructor(
		private service: CategoryService,
	) {}

	model = new ResponseDataList<CategoryModel>();
	tableConfig = new TableConfig();

	ngOnInit() {
		this.getCategoryList();
		let a = this.tableConfig.tableActionConfig;
		this.tableConfig.showActions = true;
	}

	deleting(data: any) {
		console.log(data);
		alert('deleted');
	}

	getCategoryList() {
		this.service.getCategoryList().subscribe(event => {
			this.model = event;
		})
	}
}
