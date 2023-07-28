import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TableActions = 'delete' | 'update' | 'save' | 'view';
export type TableActionsLoose =  'd' | 'u' | 's' | 'v' | TableActions;
export class TableActionButtonConfig {
	enableEditIconToggle: boolean = true;
	buttons: TableActionsLoose[] = ['d', 'u', 's', 'v']; // initially all buttons are allowed to show, subscribe to respective events to make them visible
}

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent {
	@Input() data!: any;
	@Input() config: TableActionButtonConfig = new TableActionButtonConfig();
	@Input() isEditing = false;

	@Output() onDelete = new EventEmitter<any>;
	@Output() onUpdate = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onView = new EventEmitter<any>;
	@Output() onSubscribe = new EventEmitter<any>;


	actionGroup: {[key in TableActions]: TableActionsLoose[]} = {
		'delete': ['d'],
		'update': ['u'],
		'save': ['s'],
		'view': ['v'],
	}

	subscribed = false;
	isVisible(action: TableActions, event: EventEmitter<any>) {
		let actionsToFind = [...this.actionGroup[action], action];
		let emitterUsed = event?.observed; // subscribe to respective events to make them visible
		if(emitterUsed && !this.subscribed) {
			this.subscribed = true;
			this.onSubscribe.emit();
		}
		let condition = actionsToFind.some(el => {
			return this.config.buttons.some(action => action == el)
		});
		return condition && emitterUsed;
	}

	delete() {
		this.onDelete.emit(this.data);
	}

	update() {
		this.onUpdate.emit(this.data);
	}

	save() {
		this.onSave.emit(this.data);
	}

	view() {
		this.onView.emit(this.data);
	}
}
