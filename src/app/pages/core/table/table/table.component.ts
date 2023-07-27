import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
	@Input() data: {[key: string]: any}[] = [];

	ngOnInit() {
	}

	modifyByType(input: any) {
		console.log(input, typeof input);
		
		return input;
	}
}
