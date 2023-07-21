import { Injectable } from '@angular/core';
import { TopicModel } from './topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

	topics: TopicModel[] = [
		{
			name: 'payment',
			display_name: 'Payment'
		}
	];
}
