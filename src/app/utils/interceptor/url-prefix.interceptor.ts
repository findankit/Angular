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

  constructor() {}

	private readonly baseUrl = environment.baseUrl;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		request = request.clone({
			url: `${this.baseUrl}${request.url}`
		});
		
    return next.handle(request);
  }
}
