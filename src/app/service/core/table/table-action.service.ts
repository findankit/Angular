import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableActionService {
  constructor() { }

	/* 
	@Output() onDelete = new EventEmitter<any>;
	@Output() onUpdate = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onView = new EventEmitter<any>;
	@Output() onSubscribe = new EventEmitter<any>;
	*/

	$ = new Subject();

	emit(event: string, ...data: any) {
		this.$.next(data);
	}
}
