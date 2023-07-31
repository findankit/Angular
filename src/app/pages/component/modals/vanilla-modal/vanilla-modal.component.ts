import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vanilla-modal',
  templateUrl: './vanilla-modal.component.html',
  styleUrls: ['./vanilla-modal.component.scss']
})
export class VanillaModalComponent {
	// @Output() onCancel = new EventEmitter<any>;
	@Input() showModal = false;
	constructor(
	) {}

	cancel(event: any) {
		this.showModal = false;
	}
}
