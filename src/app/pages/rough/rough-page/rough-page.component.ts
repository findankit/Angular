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

	paramsAndValues = '';

	ngOnInit() {
		this.activeRoute.queryParams.subscribe((params: any) => {
			this.paramsAndValues = Object.entries(params).map(el => el.join(': ')).join(', ').trim() || this.paramsAndValues;
			this.router.navigate([], {  queryParamsHandling: '' }); //#1
		})
	}
}
