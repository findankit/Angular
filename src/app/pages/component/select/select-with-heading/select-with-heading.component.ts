import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';

@Component({
  selector: 'app-select-with-heading',
  templateUrl: './select-with-heading.component.html',
  styleUrls: ['./select-with-heading.component.scss'],
	providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectWithHeadingComponent),
      multi: true
    }
  ]
})
export class SelectWithHeadingComponent extends BaseControlValueAccessor<string> {
	@Input() data: any[] = [];
	@Input() child_key: string = 'child';
	@Input() child_value_key: string = '_id';
	@Input() child_display_key: string = 'name';
	@Input() label!: string;

	constructor() {
		super();
	}

	change(value: any) {
		if(!value) value = null;
		this.value = value;
		this.onChange(value);
	}

	log = console.log;
}
