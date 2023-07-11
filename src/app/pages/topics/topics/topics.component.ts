import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {
	topics: TopicModel[] = [
		{
			name: 'payment',
			display_name: 'Payment'
		}
	]
}


export class TopicModel {
	name!: string;
	display_name?: string;
	constructor(obj?: TopicModel) {
		if(obj) {
			this.name = obj.name;
			this.display_name = obj.display_name;
		}
	}
}