
export class TodoModel {
	_id: string | null = null;
	todo!: string;
	endDate?: Date | string;
	status: todoStatus | null = null;
	category!: string;
}

export enum TodoStatus {
	'active' = 'active',
	'completed' = 'completed',
	'pending' = 'pending',
	'hold' = 'hold',
	'rechecking' = 'rechecking',
}
export type todoStatus = keyof typeof TodoStatus;

export class TodoListFilterModel {
	ignoreStatus?: TodoStatus[] | string = [ TodoStatus.completed ];
	showStatus?: TodoStatus[] | string = [];
	category?: string;

	/* constructor(obj?: TodoListQueryModel) {
		if (obj) {
			this.ignoreStatus = getArr(obj.ignoreStatus);
			if (obj.showStatus) {
				// If some status are added to show, all others will be in ignoreStatus
				// If none selected, then only completed status is in ingnoreStatus
				this.ignoreStatus = obj.showStatus.length ? Object.values(TodoStatus) : [TodoStatus.completed];
				this.showStatus = getArr(obj.showStatus);
				this.ignoreStatus = this.ignoreStatus.filter(el => !obj.showStatus?.includes(el));
			}
		}
	} */

	set setShowStatus(showStatus: TodoStatus[] | string) {
		this.ignoreStatus = showStatus.length ? Object.values(TodoStatus) : [TodoStatus.completed];
		this.showStatus = getArr(showStatus);
		this.ignoreStatus = this.ignoreStatus.filter(el => !showStatus?.includes(el));
	}
}


function getArr(arrOrStr: any[] | string | undefined) {
	if (!arrOrStr) return [];
	return (Array.isArray(arrOrStr) ? arrOrStr : arrOrStr?.split(",") as any[]) || [];
}