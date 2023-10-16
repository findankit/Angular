import { Component, Input, ChangeDetectorRef, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { RndTopicItemService } from './rnd-topic-item.service';

@Component({
  selector: 'app-rnd-topic-item',
  templateUrl: './rnd-topic-item.component.html',
  styleUrls: ['./rnd-topic-item.component.scss'],
})
export class RndTopicItemComponent implements OnChanges {
	@Input() iTopic!: Topic[];
	@Input() isChild = false;
	@Input() parentHovered = true;
	

	parentRadius = 100;
	hovered: boolean[] = [];
	itemStyles: any = [];

	constructor(
		private cdr: ChangeDetectorRef,
		private service: RndTopicItemService,
	) {}


	ngOnChanges(changes: SimpleChanges): void {
		this.managePositions(!!changes['parentHovered']?.currentValue);
	}

	managePositions(parentHovered: boolean) {
		if(!this.isChild) return;
		if(parentHovered) {
			this.itemStyles = this.service.getTopicAngle(this.iTopic, this.parentRadius, this.isChild, {
				position: 'absolute', zIndex: 10,
				opacity: 1,
			});
		} else {
			this.itemStyles = new Array(this.iTopic.length).fill({
				position: 'absolute', left: 0,
				top: 0, zIndex: -1,
				opacity: 0,
			});
		}
		this.cdr.detectChanges();
	}

	ngOnInit() {
	}

	showChild(value: boolean, i: number) {
		if(!this.iTopic[i].options) this.iTopic[i].options = {
			css: {}
		};
		this.iTopic[i].options.showChild = value;
		console.log('here', value);
		this.hovered[i] = value;
	}

	log = console.log;
}



export class Topic {
	name!: string;
	dontAnimate?: boolean;
	child!: Topic[];
	options!: {
		showChild?: boolean;
		css: {[key: string]: object}
	}
}