import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/service/layout/layout.service';

@Component({
	selector: 'app-vanilla-modal',
	templateUrl: './vanilla-modal.component.html',
	styleUrls: [ './vanilla-modal.component.scss' ]
})
export class VanillaModalComponent implements OnChanges {
	menuFlag = () => localStorage.getItem('toggleMenu$') === 'true' ? true : false;

	@Output() onCancel = new EventEmitter<any>;
	@Input() showModal = false;
	@Input() label = '[enter heading.]';

	private defaultShowMenuFlag: boolean | null = null;

	constructor(
		private layoutService: LayoutService
	) { }

	ngOnInit() {
		this.defaultShowMenuFlag = this.menuFlag();
		this.layoutService.toggleMenu$.subscribe(data => {
			console.log(`--`, data);
		})
	}
	ngOnDestroy() {
	}



	// showModel = false;
	// get _showModal() { return this.showModel }
	// set _showModal(value) {
	// 	if (value) {
	// 		this.defaultShowMenuFlag = this.menuFlag();
	// 		this.layoutService.hideMenu();
	// 	}
	// 	else if (this.defaultShowMenuFlag) this.layoutService.showMenu();
	// 	this._showModal = value;
	// }

	ngOnChanges(changes: SimpleChanges) {
		let shoModalChange = changes[ 'showModal' ];
		if (shoModalChange) {
			let val = shoModalChange.currentValue;
			this.layoutService.toggleMenu$.next(val ? false : !!this.defaultShowMenuFlag);
		}
	}


	@HostListener('document:keyup', [ '$event' ])
	closeOnEscape(event: Event) {
		if ((event as any).key === 'Escape' || (event as any).key === 'Esc') {
			if (this.showModal) this.onCancel.emit(event);
		}
	}

	cancel(event: any) {
		this.onCancel.emit(event);
	}
}
