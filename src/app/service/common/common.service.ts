import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import {sanitize} from 'dompurify';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
		// private sanitizer: DomSanitizer,
	) { }
	
  getQueryStrings(url: string, obj: { [ key: string ]: any }): string {
		
    let keys = Object.keys(obj);
    if (!keys.length) return url;
    let str = url.includes('?') ? '&' : '?';
    keys.map(el => {
			let value = obj[el];
      if(!value) return;
			if(Array.isArray(value)) value = value.join(',');
      if (!str.endsWith('?')) str += '&';
      str += el;
      str += '=';
      str += value;
    });
    let finalStr = ['?', '&'].some(el => el == str) ? '' : str;
		return url + finalStr;
  }

	// sanitizeHtml(html: string) {
	// 	const sanitizedContent = sanitize(html);
	// 	return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
	// }
}
