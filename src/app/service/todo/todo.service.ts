import { Injectable } from '@angular/core';
import { TodoModel, todoStatus } from './todo';
import { BehaviorSubject, of } from 'rxjs';
import { Response, ResponseDataList } from '../common/response';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
		private http: HttpClient
	) { }

	editMode$ = new BehaviorSubject(false);

	statusList: todoStatus[] = ['active', 'completed', 'pending', 'hold', 'rechecking']
	todoStatusOptions: {status: todoStatus}[] = this.statusList.map(el => {
		return {
			status: el
		}
	});

	getTodoList() {
		return this.http.get<ResponseDataList<TodoModel>>('/todo/list');
	}

	createTodoList(payload: TodoModel[]) {
		return this.http.post<string>('/todo', payload);
	}
	
	deleteTodo(id: string) {
		return this.http.delete<Response>(`/todo/${id}`);
	}

	updateTodo(payload: TodoModel) {
		return this.http.patch<Response>(`/todo/${payload._id}`, payload);
	}

	bulkUpdateTodo(payload: TodoModel[]) {
		return this.http.patch<Response>(`/todo/bulk-update`, payload);
	}
}
