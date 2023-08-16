import { Component, HostListener } from '@angular/core';
import { ResponseDataList } from 'src/app/service/common/response';
import { CategoryModel } from 'src/app/service/todo/category';
import { CategoryService } from 'src/app/service/todo/category.service';
import { TableConfig } from '../../core/table/table/table.component';
import { NgForm } from '@angular/forms';
import { validateNgForm } from 'src/app/service/common/ng-form';
import { LayoutService } from 'src/app/service/layout/layout.service';

@Component({
	selector: 'app-todo-category',
	templateUrl: './todo-category.component.html',
	styleUrls: [ './todo-category.component.scss' ]
})
export class TodoCategoryComponent {
	tableConfig = new TableConfig({
		bindValuePath: {
			parent: 'name'
		}
	});

	private defaultShowMenuFlag: boolean | null = null;
	private _showModal = false;
	get showModal() { return this._showModal }
	set showModal(value) {
		if (value) {
			this.defaultShowMenuFlag = localStorage.getItem('toggleMenu$') === 'true' ? true : false;
			this.layoutService.hideMenu();
		}
		else if (this.defaultShowMenuFlag) this.layoutService.showMenu();
		this._showModal = value;
	}
	color = '';
	

	constructor(
		private service: CategoryService,
		private layoutService: LayoutService,
	) { }

	category = new CategoryModel();
	model = new ResponseDataList<CategoryModel>();
	isCreatingParent = false;
	
	ngOnInit() {
		// this.defaultShowMenuFlag = this.layoutService.toggleMenu$.value;
		this.getCategoryList();
	}

	deleting(data: CustomEvent<CategoryModel>) {
		if (data.detail._id) this.service.deleteCategory(data.detail._id).subscribe(event => {
			if (event.success) {
				this.getCategoryList();
			}
		})
	}

	getCategoryList() {
		this.service.getCategoryList().subscribe(event => {
			this.model = event;
		})
	}

	createCategory(form: NgForm) {
		if (!this.showModal) return;
		let validate = validateNgForm(form);
		if (validate.invalid) return;
		this.service.addCategory({ categories: this.category }).subscribe(event => {
			if (event.success) {
				this.getCategoryList();
				this.showModal = false;
				form.reset();
			}
		})
	}

}
