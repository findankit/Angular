import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButterFAQModel, ButterHomePageModel, ButterItemIdentity, ButterPageTypes, ButterPagesModel, ButterPagination, GetBlogPostModel } from 'src/app/service/cms/butter-cms/butter-cms';
import { ButterCmsService } from 'src/app/service/cms/butter-cms/butter-cms.service';
import { LayoutService } from 'src/app/service/layout/layout.service';


@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: [ './pages.component.scss' ]
})
export class PagesComponent {
	constructor(
		private router: ActivatedRoute,
		private service: ButterCmsService,
		private layoutService: LayoutService,
	) { }

	currentPage: ButterPageTypes | null = null;

	homePageModel = new ButterHomePageModel();
	faqModel = new ButterFAQModel();
	faqListModel = new ButterPagination<GetBlogPostModel>();

	ngOnInit(): void {
		this.router.paramMap.subscribe(evt => {
			this.currentPage = evt.get('page') as ButterPageTypes;
			this.fetchPageData(this.currentPage);
		});
	}

	fetchPageData(page: ButterPageTypes) {
		this.service.getPageBySlug(page).subscribe((event) => {
			if (page == 'home') {
				let data: ButterPagesModel<ButterHomePageModel> = event.data;
				this.homePageModel = data.fields;
			} else if (page == 'faq') {
				let data: ButterPagesModel<ButterFAQModel> = event.data; 
				this.faqModel = data.fields;
				this.service.getBlogs({category_slug: 'faq'}).subscribe(blogs => {
					console.log(blogs);
					this.faqListModel = blogs;
				})
			}
			this.layoutService.backgroundImage$.next(event.data.fields.background);
		})
	}

	ngOnDestroy() {
		this.layoutService.backgroundImage$.next(null);
	}

	concatTags(tags: ButterItemIdentity[]) {
		return tags.map(el => el.name).join(', ');
	}


	// queryModel = new ButterCmsQueryStringModel();
	// menuModel = new GetContentModel();
	// blogsModel = new ButterPagination<GetBlogPostModel>();
	// model = new ButterPagesModel<ButterHomePageModel>();


	// getPageContent() {
	// 	this.service.getCollection(this.queryModel)
	// 		.pipe(catchError(v => of(v.error)))
	// 		.subscribe((event: any) => {
	// 			console.log(event);
	// 		});
	// }

	// getMenuItems() {
	// 	let queryModel = new ButterCmsQueryStringModel();
	// 	queryModel._keys = [ 'navigation_menu_item' ];
	// 	this.service.getCollection(queryModel).subscribe(event => {
	// 		this.menuModel = event;
	// 	})
	// }

	// getBlogs() {
	// 	let queryModel = new ButterCmsQueryStringModel();
	// 	this.service.getBlogs(queryModel).subscribe(event => {
	// 		this.blogsModel = event;
	// 	})
	// }

	// getPage() {
	// 	this.service.getPageBySlug('home').subscribe((evt: ButterPagesModel<ButterHomePageModel>) => {
	// 		console.log(evt);
	// 	})
	// }
}
