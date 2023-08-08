import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlPrefixInterceptor implements HttpInterceptor {

	constructor() { }

	private readonly baseUrl = environment.baseUrl;
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		function handle() { return next.handle(request) };

		if (request.url.includes(environment.cms.butter.baseUrl)) {
			request = request.clone({
				headers: request.headers.set('Authorization', 'Token ' + environment.cms.butter.token)
			});
			return handle();
		} else if(request.url.startsWith('http') && request.url.includes('api.sanity.io')) {
			request = request.clone({
				headers: request.headers.set('Authorization', 'Bearer ' + environment.cms.sanityio.token)
			});
			return handle();
		}
		request = request.clone({
			url: `${this.baseUrl}${request.url}`
		});

		return handle();
	}
}
