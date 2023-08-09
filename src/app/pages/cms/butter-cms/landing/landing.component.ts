import { Component } from '@angular/core';
import { ButterCollectionListModel, ButterCollectionTypes, ButterHomeCollectionModel, ButterPaginationObj } from 'src/app/service/cms/butter-cms/butter-cms';
import { ButterCmsService } from 'src/app/service/cms/butter-cms/butter-cms.service';

class NavModel extends ButterPaginationObj<ButterCollectionListModel<ButterHomeCollectionModel>> {};

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent {
	constructor(
		private service: ButterCmsService,
	) { }

	navModel = new NavModel();
	navItems: ButterHomeCollectionModel[] = [];

	ngOnInit() {
		this.getCollection('home');
	}

	getCollection(type: ButterCollectionTypes = 'home') {
		this.service.getCollectionByType(type).subscribe((event: NavModel) => {
			if(type == 'home') {
				this.navModel = event;
				this.navItems = event.data[type];
				console.log(this.navItems);
			}	
		})
	}
}
