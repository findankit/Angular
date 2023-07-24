import { Injectable } from '@angular/core';
import { TodoModel, todoStatus } from './add-new-form';
import { of } from 'rxjs';
import { ResponseDataList } from '../../common/response';

@Injectable({
  providedIn: 'root'
})
export class AddNewFormService {

  constructor() { }

	statusList: todoStatus[] = ['active', 'completed', 'pending', 'hold', 'rechecking']
	todoStatusOptions: {status: todoStatus}[] = this.statusList.map(el => {
		return {
			status: el
		}
	});

	getTodoList() {
		let sampleData = new ResponseDataList<TodoModel>();
		sampleData.data.push({
			todo: 'Laundry',
			status: 'hold'
		});
		return of<ResponseDataList<TodoModel>>(sampleData);
	}
}
