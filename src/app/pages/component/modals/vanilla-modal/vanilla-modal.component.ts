import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/service/layout/layout.service';

@Component({
	selector: 'app-vanilla-modal',
	templateUrl: './vanilla-modal.component.html',
	styleUrls: [ './vanilla-modal.component.scss' ]
})
export class VanillaModalComponent implements OnChanges {
	@Output() onCancel = new EventEmitter<any>;
	@Input() showModal = false;
	@Input() label = '[enter heading.]';
	constructor(
		private layoutService: LayoutService
	) { }

	ngOnInit() {
		// debugger;
	}
	ngOnDestroy() {
		// debugger;
	}

	ngOnChanges(changes: SimpleChanges) {
		let shoModalChange = changes[ 'showModal' ];
		if (shoModalChange) {
			let val = shoModalChange.currentValue;

		}
	}


	@HostListener('document:keyup', [ '$event' ])
	closeOnEscape(event: Event) {
		if ((event as any).key === 'Escape' || (event as any).key === 'Esc') {
			if(this.showModal) this.onCancel.emit(event);
		}
	}

	cancel(event: any) {
		this.onCancel.emit(event);
	}
}
