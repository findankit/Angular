
export class TodoModel {
	_id: string | null = null;
	todo!: string;
	endDate?: Date | string;
	status!: todoStatus;
}

export type todoStatus = 'active' | 'completed' | 'pending' | 'hold' | 'rechecking';