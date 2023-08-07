import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ButterCmsQueryStringModel, GetBlogPostModel, GetContentModel } from 'src/app/service/cms/butter-cms/butter-cms';
import { ButterCmsService } from 'src/app/service/cms/butter-cms/butter-cms.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent {
	constructor(
		private service: ButterCmsService,
	) { }

	ngOnInit() {
		this.getPageContent();
		this.getMenuItems();
		this.getBlogs();
	}

	queryModel = new ButterCmsQueryStringModel();
	menuModel = new GetContentModel();
	blogsModel = new GetBlogPostModel();

	getPageContent() {
		this.service.getCollection(this.queryModel)
			.pipe(catchError(v => of(v.error)))
			.subscribe((event: any) => {
				console.log(event);
			});
	}

	getMenuItems() {
		let queryModel = new ButterCmsQueryStringModel();
		queryModel._keys = ['navigation_menu_item'];
		this.service.getCollection(queryModel).subscribe(event => {
			this.menuModel = event;
		})
	}

	getBlogs() {
		let queryModel = new ButterCmsQueryStringModel();
		// queryModel._keys = ['navigation_menu_item'];
		this.service.getBlogs(queryModel).subscribe(event => {
			this.blogsModel = event;
		})
	}
}
