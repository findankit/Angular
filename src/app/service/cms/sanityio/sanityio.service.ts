import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SanityQueryModel, SanityResponse } from './sanityio';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class SanityioService {
	env = environment.cms.sanityio;

	constructor(
		private http: HttpClient,
	) { }

	helpers = {
		endpoint: () => {
			return `https://${this.env.projectId}.api.sanity.io/${this.env.version}/data/`
		},
		imageUrl: (filename?: string) => {
			if(filename?.startsWith('image-'))filename = filename.replace('image-', '');
			if(!filename) return '';
			if(!filename.includes('.')) {
				let temp = filename.split('-');
				let extension = temp.splice(-1);
				filename = temp.join('-') + '.' + extension;
			}
			return `https://cdn.sanity.io/images/${this.env.projectId}/${this.env.dataset}/${filename}`;
		}
	}


	query(query: SanityQueryModel = {_type: 'navItems'}) {
		let querystring = Object.entries(query).map(el => {
			let [key, value] = el;
			return key && value ? `[${key} == '${value}']` : ''
		}).join('');
		// let temp = Object.entries(query)[ 0 ];
		// let tempQuery = temp.length ? `[${temp[ 0 ]} == '${temp[ 1 ]}']` : '';
		let url = this.helpers.endpoint() + `query/${this.env.dataset}?query=*${querystring}`;
		return this.http.get<SanityResponse<any>>(url);
	}

	docById(id: string) {
		let url = this.helpers.endpoint() + `doc/${id}`;
		return this.http.get(url);
	}

}
