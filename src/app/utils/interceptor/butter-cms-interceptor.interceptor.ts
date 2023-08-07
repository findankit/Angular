import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/service/common/common.service';


@Injectable()
export class ButterCmsInterceptorInterceptor implements HttpInterceptor {

  constructor(
		private common: CommonService,
	) {}
	env = environment.cms.butter;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		debugger;
		request = request.clone({
			url: this.common.getQueryStrings(`${this.env.baseUrl}${request.url}`, {auth_token: this.env.token}),
		});
    return next.handle(request);
  }
}
