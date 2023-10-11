import { Component } from '@angular/core';
import { NodeJsDebugService } from './node-js-debug.service';
import { catchError, map, tap } from 'rxjs';


@Component({
	selector: 'app-node-js-debug',
	templateUrl: './node-js-debug.component.html',
	styleUrls: [ './node-js-debug.component.scss' ]
})
export class NodeJsDebugComponent {

	ws_url = '';
	url_error = '';
	messages = [ 'Websocket messages will be shown here.' ];

	constructor(
		private service: NodeJsDebugService,
	) { }

	ngOnInit() {
		console.log('here');
	}

	connect() {
		if (!this.ws_url) {
			this.url_error = 'Please provide an url to proceed.';
			return;
		}
		this.url_error = '';
		this.service.initializeWebSocket(this.ws_url);
		// this.service.messages$.subscribe(data => {
		// 	console.log(data);
		// })
		this.service.messages$.pipe(
			map(rows => rows.data),
			catchError(error => { throw error }),
			tap({
				error: error => console.log('[Live component] Error:', error),
				complete: () => console.log('[Live component] Connection Closed'),
				next(value) {
					console.log(`Next value:: `, value);
				},
			})
		);
	}
}
