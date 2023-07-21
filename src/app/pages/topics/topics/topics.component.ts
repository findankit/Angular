import { Component } from '@angular/core';
import { TopicModel } from 'src/app/service/topics/topic';
import { TopicService } from 'src/app/service/topics/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {
	constructor(
		private service: TopicService,
	) {}
	topics = this.service.topics;
}

