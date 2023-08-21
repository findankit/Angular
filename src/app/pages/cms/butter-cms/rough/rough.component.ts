import { Component } from '@angular/core';
import { ButterPagesModel } from 'src/app/service/cms/butter-cms/butter-cms';
import { ButterCmsService } from 'src/app/service/cms/butter-cms/butter-cms.service';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.scss']
})
export class RoughComponent {
	constructor(
		private service: ButterCmsService,
	) {}

	banner = new ButterPagesModel<any>;

	ngOnInit() {
		this.getPage('ivf-header-html', '*');
	}

	getPage(page: string, type: string) {
		this.service.getPageBySlug(page, type).subscribe(event => {
			this.banner = event.data;
		});
	}
}
