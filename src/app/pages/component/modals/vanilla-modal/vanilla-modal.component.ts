import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';
import { LayoutService } from 'src/app/service/layout/layout.service';
import { SelectComponent } from '../../select/select/select.component';

@Component({
	selector: 'app-vanilla-modal',
	templateUrl: './vanilla-modal.component.html',
	styleUrls: [ './vanilla-modal.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => VanillaModalComponent),
			multi: true
		}
	]
})
export class VanillaModalComponent extends BaseControlValueAccessor<boolean> implements OnChanges {
	menuFlag = () => localStorage.getItem('toggleMenu$') === 'true' ? true : false;

	@Output() onCancel = new EventEmitter<any>;
	@Input() showModal = false;
	@Input() label = '[enter heading.]';

	private defaultShowMenuFlag: boolean | null = null;

	constructor(
		private layoutService: LayoutService
	) {
		super();
	 }

	ngOnInit() {
		this.defaultShowMenuFlag = this.menuFlag();
		// this.layoutService.toggleMenu$.subscribe(data => {
		// 	console.log(`--`, data);
		// })
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
			this.value = val;
			// this.layoutService.toggleMenu$.next(val ? false : !!this.defaultShowMenuFlag);
		}
	}


	@HostListener('window:keyup', [ '$event' ])
	closeOnEscape(event: Event) {
		if ((event as any).key === 'Escape' || (event as any).key === 'Esc') {
			if (this.showModal || this.value) {
				this.cancel(event);
			}
		}
	}

	cancel(event: any) {
		this.onCancel.emit(event);
		this.value = false;
		this.onChange(false);
	}

	log = console.log;
}
