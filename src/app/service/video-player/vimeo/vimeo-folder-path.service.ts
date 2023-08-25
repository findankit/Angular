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
		private router: Router,
		private ar: ActivatedRoute,
	) { }

	folderPath$ = new BehaviorSubject<(VimeoFolderMeta | VimeoVideoMeta)[]>([]);
	vimeoItems$ = new BehaviorSubject<VimeoItemsModel[]>([]);

}


