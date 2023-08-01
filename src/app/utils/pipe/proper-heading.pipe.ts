import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properHeading'
})
export class ProperHeadingPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
		value = value.split('_').join(' ').trim();
		value = this.camelToTitleCase(value);
		return value;
  }
	camelToTitleCase(input: string) {
		const regex = /([A-Z])/g;
		return input.replace(regex, ' $1').split(' ').map(el => `${el[0].toUpperCase()}${el.slice(1)}`).join(' ').trim();
	}
}
