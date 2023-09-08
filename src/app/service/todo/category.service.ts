import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Response, ResponseDataList } from '../common/response';
import { CategoryModel } from './category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
		private http: HttpClient,
	) { }

	getCategoryList() {
		return this.http.get<ResponseDataList<CategoryModel>>('/todo-category/')
	}

	addCategory(payload: {categories: CategoryModel}) {
		return this.http.post<Response>('/todo-category', payload)
	}
	
	deleteCategory(id: string) {
		return this.http.delete<Response>('/todo-category/'+id)
	}

	getNestedCategories() {
		return this.http.get<ResponseDataList<CategoryModel>>('/todo-category/nested')
	}
}
