import { Component } from '@angular/core';
import { QueryResponseModel, SanityResponse, SanityTextEditorBody } from 'src/app/service/cms/sanityio/sanityio';
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

	postsModel = new SanityResponse<QueryResponseModel>();
	img = this.service.helpers.imageUrl;
	
	ngOnInit() {
		this.getPosts();
		this.postsModel.result
	}

	getPosts() {
		this.service.query().subscribe(event => {
			console.log(event);
			this.postsModel = event;
		})
	}

	joinBlogData(data: SanityTextEditorBody[]) {
		return data.map(el => {
			let child = el.children;
			let text = child?.map(el => el.text).join('\n');
			return text;
		}).join('\n');
	}
}
