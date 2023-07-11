import { Component, Input } from '@angular/core';

const iconIds = {
	topic: {
		payment: 1,
	}
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
	@Input() type!: iconTypes;

	get id (): number {
		let val: any = iconIds;
		this.type.split('-').map(el => {
			val = val[el];
		});
		return val;
	}
	constructor() {}
	
	ngOnInit() {
		console.log(this.id);
	}
}


type topics = 'topic-payment';

export type iconTypes = topics | string;