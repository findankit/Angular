import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/service/accessor/baseaccessor';


@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
	providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSelectComponent),
      multi: true
    }
  ]
})
export class NgSelectComponent extends BaseControlValueAccessor<any> {
	@Input() placeholder = 'No Item Selected';
	@Input() options: {}[] = [];
	@Input() bindLabel = 'name';
	@Input() bindValue = '_id';

	valueChange(event: any) {
		this.value = event[this.bindValue];
		this.onChange(this.value);
	}
}
