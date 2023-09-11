import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

export type TableActions = 'delete' | 'update' | 'save' | 'view' | 'cancel' | 'info';
export type TableActionsLoose = 'd' | 'u' | 's' | 'v' | 'c' | 'i' | TableActions;
export class TableActionButtonConfig {
	enableEditIconToggle: boolean = true;
	buttons: TableActionsLoose[] = [ 'd', 'u', 's', 'v', 'c', 'i' ]; // initially all buttons are allowed to show, subscribe to respective events to make them visible
}

@Component({
	selector: 'app-table-actions',
	templateUrl: './table-actions.component.html',
	styleUrls: [ './table-actions.component.scss' ]
})
export class TableActionsComponent {
	@Input() data!: any;
	@Input() config?: TableActionButtonConfig = new TableActionButtonConfig();
	@Input() isEditing = false;

	/* Below Output declaration are for accessing $event in parent event subscription */
	@Output() onDelete = new EventEmitter<any>;
	@Output() onUpdate = new EventEmitter<any>;
	@Output() onSave = new EventEmitter<any>;
	@Output() onView = new EventEmitter<any>;
	@Output() onSubscribe = new EventEmitter<any>;
	@Output() onCancel = new EventEmitter<any>;
	@Output() onInfo = new EventEmitter<any>;

	constructor(
		private element: ElementRef,
	) { }


	actionGroup: { [ key in TableActions ]: TableActionsLoose[] } = {
		'delete': [ 'd' ],
		'update': [ 'u' ],
		'save': [ 's' ],
		'view': [ 'v' ],
		'cancel': [ 'c' ],
		'info': [ 'i' ],
	}

	subscribed = false;
	isVisible(action: TableActions, event: EventEmitter<any>) {
		let actionsToFind = [ ...this.actionGroup[ action ], action ];
		let emitterUsed = event?.observed; // subscribe to respective events to make them visible
		if (emitterUsed && !this.subscribed) {
			this.subscribed = true;
			this.onSubscribe.emit();
		}
		let condition = actionsToFind.some(el => {
			return this.config?.buttons.some(action => action == el)
		});
		return condition && emitterUsed;
	}

	dispatch(eventname: string) {
		this.element.nativeElement.dispatchEvent(new CustomEvent(eventname, {
			bubbles: true,
			detail: this.data,
			cancelable: true
		}))
	}

	delete() {
		this.dispatch('onDelete');
	}

	update() {
		this.dispatch('onUpdate');
	}

	save() {
		this.dispatch('onSave');
	}

	view() {
		this.dispatch('onView');
	}

	info() {
		this.dispatch('onInfo');
	}

	cancel() { this.dispatch('onCancel') }
}
