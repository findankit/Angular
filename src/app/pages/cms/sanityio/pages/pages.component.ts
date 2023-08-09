import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityFAQModel, SanityPagesModel, SanityTypes, SanityResponse, SanityPageTypes, SanityBlockContentModel } from 'src/app/service/cms/sanityio/sanityio';
import { SanityioService } from 'src/app/service/cms/sanityio/sanityio.service';
import { LayoutService } from 'src/app/service/layout/layout.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
	constructor(
		private service: SanityioService,
		private ar: ActivatedRoute,
		private layoutService: LayoutService,
	) {}

	currentPage: string | null = null;

	imgUrl = this.service.helpers.imageUrl;

	pageModel = new SanityPagesModel();
	faqListModel = new SanityResponse<SanityFAQModel>();

	ngOnInit() {
		this.ar.paramMap.subscribe(event => {
			this.currentPage = event.get('page');
			this.getPages(this.currentPage as SanityPageTypes);
		})

	}

	getPages(pageType: SanityPageTypes) {
		this.service.query({_type: 'pages', tag: pageType}).subscribe((event: SanityResponse<SanityPagesModel>) => {
			let [_page] = event.result;
			this.layoutService.backgroundImage$.next(this.service.helpers.imageUrl(_page.background?.asset._ref) || null);
			if(!_page) return;
			this.pageModel = _page;
			if(pageType == 'faq') {
				this.service.query({_type: 'faq'}).subscribe((event: SanityResponse<SanityFAQModel>) => {
					this.faqListModel = event;
				})
			} else if (pageType == 'home') {
			}
		})
	}

	ngOnDestroy() {
		this.layoutService.backgroundImage$.next(null);
	}

	displayBlockContent(data: SanityBlockContentModel[] = []) {
		return data.map(el => el.children?.map(el => el.text).join('\n')).join('\n');
	}
}
