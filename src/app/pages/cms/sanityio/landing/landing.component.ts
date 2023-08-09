import { Component } from '@angular/core';
import { SanityNavItemModel, SanityResponse } from 'src/app/service/cms/sanityio/sanityio';
import { SanityioService } from 'src/app/service/cms/sanityio/sanityio.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
	constructor(
		private service: SanityioService,
	){}

	navItems: SanityNavItemModel[] = [];

	ngOnInit() {
		this.getNavigationItems();
	}

	getNavigationItems() {
		this.service.query({_type: 'navItems'}).subscribe((event: SanityResponse<SanityNavItemModel>) => {
			// navItems.result.map(el => )
			this.navItems = event.result;
		})
	}
}
