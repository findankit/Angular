import { Injectable } from '@angular/core';
import { Topic } from './rnd-topic-item.component';

@Injectable({
  providedIn: 'root'
})
export class RndTopicItemService {

  constructor() { }

	getTopicAngle(iTopic: Topic[], radius: number, isChild: boolean, styles: object) {
		let output: {}[] = [];
		let totalChilds = (iTopic.length || 1) - 1;
		let singleAngle = 90 / totalChilds;
		let angleArr: number[] = [];
		let sum = 0;
		while (sum < 90) {
			angleArr.push(sum);
			sum += singleAngle;
		}
		if(!(angleArr.length-1) && angleArr[0] == 0) angleArr = []; 
		angleArr = [...new Set([0, ...angleArr, 90])];
		iTopic.map((topic, childIndex) => {
			// topic.child?.map((el, childIndex) => {
				let childAngle = angleArr[childIndex];
				let position = {	
					top: `${radius * Math.sin(childAngle * Math.PI / 180)}px`,
					left: `${radius * Math.cos(childAngle * Math.PI / 180)}px`,
					...styles
				}
				if(isChild)output[childIndex] = position;
				iTopic[childIndex].options.css['position'] = position;
			// })
		});
		return output;
	}
}
