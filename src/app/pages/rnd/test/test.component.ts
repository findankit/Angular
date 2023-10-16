import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
	animations: [
		trigger('options', [
			state('hide', style({
				left: 0,
			})),
			state('show', style({
				left: '100%',
				// zIndex: 100,
			})),
			state('hideSlowly', style({
				left: 0,
			})),
			transition('* => *', [
				animate('0.1s'),
			]),
			transition('* => endSlowly', [
				animate('3s', keyframes([
					style({offset: 0.2}),
					style({zIndex: -1, offset: 0.3})
				])),
			]),
		])
	]
})
export class TestComponent {
	state = 'hide';
	log = console.log;
}
