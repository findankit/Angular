import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableActionButtonConfig } from '../table-actions/table-actions.component';


export class TableConfig {
	tableActionConfig = new TableActionButtonConfig();
	showActions = true;
	columnOrder: string[] | null = null;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
	@Input() data: {[key: string]: any}[] = [];
	@Input() schema!: any;
	@Input() config!: TableConfig;

	@Output() onDelete = new EventEmitter<any>;
	@Output() onUpdate = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onView = new EventEmitter<any>;
	@Output() onSubscribe = new EventEmitter<any>;

	protected subscribedToEvents = false;

	ngOnInit() {
	}
}
