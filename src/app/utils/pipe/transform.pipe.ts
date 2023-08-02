import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
		if(this.isValidDate(value)) {
			value = moment(value).format('DD-MM-YYYY hh:mm A');
		}
    return value || '-';
  }

	isValidDate(date: Date): boolean {
		return date instanceof Date && !isNaN(date.getTime());
	}

}
