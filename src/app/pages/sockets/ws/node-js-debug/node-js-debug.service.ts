import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, catchError, of, switchAll, tap } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";


@Injectable({
	providedIn: 'root'
})
export class NodeJsDebugService {

	private socket$!: WebSocketSubject<any>;
	private socketMessage$ = new Subject<Observable<any>>();
	public messages$ = this.socketMessage$.pipe(switchAll(), catchError(e => { throw e }));

	constructor() { }

	initializeWebSocket(url: string) {
		this.socket$ = webSocket(url);
		console.log(`Initializing socket: `, this.socket$);

		this.socketMessage$.next(
			this.socket$.pipe(
				tap({
					error: (error: any) => console.log(error),
				}),
				catchError((e: any) => EMPTY)
			)
		)
	}


}
