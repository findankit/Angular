import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class VimeoService {

	constructor(
		private http: HttpClient,
	) { }

	private env = environment.player.vimeo;

	model = new VimeoUserModel();
	endpoints = new Connections();
	user_id: number | null = null;
	

	fetchVimeoUser() {
		return this.http.get<VimeoUserModel>('__vimeo/me');
	}

	getVimeoData(url?: string) {
		return this.http.get<Paginated<any>>(`__vimeo/${url || this.endpoints.folders.uri}`);
	}

	uploadVideo() {
		
	}
}



/* 
*		-		-		*
 * 	-		-	 *
*		-		-		*
*/

export type httpMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export class VimeoUserModel {
	uri!: string;
	metadata!: VimeoMetadata;
	userId() {
		return +this.uri.split('/users/').join('');
	}
}


export class VimeoItemsModel {
	type!: 'folder' | 'video';
	folder?: VimeoFolderMeta;
	video?: VimeoVideoMeta;
}
export class VimeoFolderMeta {
	name!: string;
	uri!: string;
	metadata!: VimeoMetadata;
	constructor(obj?: VimeoFolderMeta) {
	}
}
export class VimeoVideoMeta {
	uri!: string;
	name!: string;
	duration!: number;
	link!: string;
	get video_id() {
		return +this.uri.split('/videos/').join('')
	}
	pictures!: {
		uri: string;
		active: true;
		base_link: string;
		sizes: {
			width: number,
			height: number,
			link: string,
			link_with_play_button: string
		}[];
	}
}


export class Paginated<T> {
	total!: number;
	page!: number;
	per_page!: number;
	paging!: {
		next: null,
		previous: null,
		first: string,
		last: string
	};
	data!: T[];
}



/* ****METADATA**** */

class VimeoMetadata {
	connections!: Connections;
}
class Connections {
	folders!: Connection;
	folders_root!: Connection;
	albums!: Connection;
	categories!: Connection;
	feed!: Connection;
	videos!: Connection;
	watchlater!: Connection;
	items!: Connection;
}
class Connection {
	uri!: string;
	options: httpMethods[] = [];
	total: number = 0;
}
