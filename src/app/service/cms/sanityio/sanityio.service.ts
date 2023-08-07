import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class SanityioService {
	env = environment.cms.sanityio;
	client = createClient({
		projectId: this.env.projectId,
		dataset: 'production',
		useCdn: true, // set to `false` to bypass the edge cache
		apiVersion: '2023-05-03',
	})

	constructor() { }
}
