
export class TodoModel {
	id?: number | null = null;
	todo!: string;
	endDate?: Date | string;
	status!: todoStatus;
}

export type todoStatus = 'active' | 'completed' | 'pending' | 'hold' | 'rechecking';