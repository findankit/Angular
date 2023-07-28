import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
		if(moment(value).isValid()) {
			value = moment(value).format('DD-MM-YYYY hh:mm A');
		}
    return value || '-';
  }

}
