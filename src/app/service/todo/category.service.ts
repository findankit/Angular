import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ResponseDataList } from '../common/response';
import { CategoryModel } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

	getCategoryList() {
		let res = new ResponseDataList<CategoryModel>();
		let data = new CategoryModel();
		data.name = 'temp';
		res.data.push(data);
		return of(res);
	}
}
