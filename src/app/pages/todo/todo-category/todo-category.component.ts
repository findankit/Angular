import { Component } from '@angular/core';
import { ResponseDataList } from 'src/app/service/common/response';
import { CategoryModel } from 'src/app/service/todo/category';
import { CategoryService } from 'src/app/service/todo/category.service';

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

	ngOnInit() {
		this.getCategoryList();
	}

	getCategoryList() {
		this.service.getCategoryList().subscribe(event => {
			this.model = event;
		})
	}
}
