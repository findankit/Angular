import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-rough-page',
	templateUrl: './rough-page.component.html',
	styleUrls: ['./rough-page.component.scss']
})
export class RoughPageComponent {
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
	) { }

	ngOnInit() {
		this.activeRoute.queryParams.subscribe((params: any) => {
			if (params.episodeStatus) {

			}
		})
	}
}
