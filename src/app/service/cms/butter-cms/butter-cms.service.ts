import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ButterCmsQueryStringModel, GetBlogPostModel, GetContentModel, PaginationMeta } from './butter-cms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/common.service';
import { GetContentResponseModel } from './get-content';

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
		return `${this.env.baseUrl}`+path;
	}

	getCollection(query: ButterCmsQueryStringModel) {
		return this.http.get<GetContentModel<PaginationMeta>>(this.common.getQueryStrings(this.url('content'), query));
	}

	getBlogs(query: ButterCmsQueryStringModel) {
		debugger;
		return this.http.get<GetBlogPostModel<PaginationMeta>>(this.common.getQueryStrings(this.url('posts'), query));
	}
}
