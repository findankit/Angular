import { Component, Input, forwardRef, SimpleChanges, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: [ './select.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true
		}
	]
})
export class SelectComponent extends BaseControlValueAccessor<string> {
	@Input() label = '';
	@Input() keyName = 'key';
	@Input() valueName = 'value';
	@Input() dataItems: { [ key: string ]: string }[] = [];

	constructor() {
		super();
	}

	ngAfterViewInit() {
	}

	change(value: any) {
		// if(!value) value = null;
		this.value = value;
		this.onChange(value);
	}

	log=console.log;
}	
