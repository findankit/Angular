import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ButterCmsQueryStringModel, ButterCollectionListModel, ButterCollectionTypes, ButterPageTypes, ButterPagesModel, ButterPagination, ButterPaginationObj, GetBlogPostModel, GetContentModel, PaginationMeta } from './butter-cms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/common.service';
import { GetContentResponseModel } from './get-content';

let pageTypeOfPage = {
	'home': 'home', // page_name: page_type
	'faq': 'faq'
}
@Injectable({
	providedIn: 'root'
})
export class ButterCmsService {
	constructor(
		private http: HttpClient,
		private common: CommonService,
	) { }
	env = environment.cms.butter;

	url(path: string) {
		return `${this.env.baseUrl}` + path;
	}

	getPageBySlug(pageName: ButterPageTypes) {
		let pageType = pageTypeOfPage[pageName];
		return this.http.get<{ data: ButterPagesModel<any> }>(this.url(`pages/${pageType}/${pageName}`));
	}

	getPageList(pageType: ButterPageTypes = 'home') {
		return this.http.get<ButterPagination<ButterPagesModel<any>>>(this.url(`pages/${pageType}`));
	}

	getCollectionByType(collectionType: ButterCollectionTypes = 'home') {
		return this.http.get<ButterPaginationObj<ButterCollectionListModel<any>>>(this.url(`content/${collectionType}`));
	}

	getCollection(query: ButterCmsQueryStringModel) {
		return this.http.get<GetContentModel<PaginationMeta>>(this.common.getQueryStrings(this.url('content'), query));
	}

	getBlogs(query: any = {}) {
		return this.http.get<ButterPagination<GetBlogPostModel>>(this.common.getQueryStrings(this.url('posts'), query));
	}
}
