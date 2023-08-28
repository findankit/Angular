import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VimeoFolderMeta, VimeoItemsModel, VimeoService, VimeoVideoMeta } from './vimeo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class VimeoFolderPathService {
	constructor(
		private service: VimeoService,
		private http: HttpClient,
	) { }

	folderPath$ = new BehaviorSubject<(VimeoFolderMeta | VimeoVideoMeta)[]>([]);
	vimeoItems$ = new BehaviorSubject<VimeoItemsModel[]>([]);

	createFolder(payload: VimeoCreateFolderModel) {
		return this.http.post<any>(`__vimeo/users/${this.service.user_id}/projects`, payload)
	}
}



export class VimeoCreateFolderModel {
	name!: string;
	parent_folder_uri!: string | null;
}