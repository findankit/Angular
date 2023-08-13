
export class TodoModel {
	_id: string | null = null;
	todo!: string;
	endDate?: Date | string;
	status!: todoStatus;
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
	ignoreStatus?: TodoStatus[] = [TodoStatus.completed];
	showStatus?: TodoStatus[] = [];
}