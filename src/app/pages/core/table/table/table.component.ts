import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TableActionButtonConfig } from '../table-actions/table-actions.component';

/* Simply loop over all data and create table */
/* Header is created from first object in data array */
export class TableConfig {
	tableActionConfig?: TableActionButtonConfig = new TableActionButtonConfig();
	showActions?:boolean = true;
	columnOrder?: string[] | null = null;
	ignoredColumns?: string[] = [ '__v' ];
	/* 
		eg. {parent: 'name'}
	*/
	bindValuePath?: IObj<string> = {}; // to show data if nested data provided
	constructor(obj?: TableConfig) {
		if(obj) {
			Object.entries(obj).map(el => {
				let [key, value] = el;
				this[key as keyof TableConfig] = value;
			})
		}
	}
}

interface IObj<T> { [ key: string ]: T };

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ]
})
export class TableComponent {
	@Input() data: IObj<any>[] = [];
	@Input() schema!: any;
	@Input() config = new TableConfig();

	@Output() onDelete = new EventEmitter<any>;
	@Output() onUpdate = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onView = new EventEmitter<any>;
	@Output() onSubscribe = new EventEmitter<any>;

	protected subscribedToEvents = false;
	columns: string[] = [];

	matchIgnoredColumns(obj: any): [string, any][] {
		let temp: any = {};
		this.columns.map(el => {
			temp[el] = obj[el];
		});
		return Object.entries(temp);
	}

	manageDataBind(data: [key: string, value: any]): string {
		let [key, value] = data;
		if(typeof value == 'string') return value;
		let bindPath = this.config.bindValuePath?.[key];
		if(bindPath) {
			bindPath.split('.').map(el => {
				if(!value) return;
				value = (value as IObj<any>)[el];
			})
			return value;
		}
		return value;
	}

	parse(obj: {}) {
		return JSON.parse(JSON.stringify(obj));
	}

	ngOnInit() {
		this.columns = Object.keys(this.data[ 0 ] || {}).filter(el => !this.config.ignoredColumns?.includes(el));
	}

	log(...data: any) {console.log(...data)} 

	ngOnChanges(change: SimpleChanges) {
		let _data = change[ 'data' ];
		if (_data) {
			if (this.data.length) {
				this.columns = Object.keys(this.data[ 0 ] || {}).filter(el => !this.config.ignoredColumns?.includes(el));
			}
		}
	}
}
