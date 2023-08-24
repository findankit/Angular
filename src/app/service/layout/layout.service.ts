import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NavDropdownOption } from 'src/app/pages/layout/nav-dropdown/nav-dropdown.component';

@Injectable({
	providedIn: 'root'
})
export class LayoutService {

	constructor() { }

	toggleMenu$ = new BehaviorSubject(true);
	backgroundImage$ = new Subject<string | null>();

	toggleMenu() {
		let value = !this.toggleMenu$.value;
		// debugger;
		localStorage.setItem('toggleMenu$', value.toString());
		this.toggleMenu$.next(!this.toggleMenu$.value);
	}
	
	hideMenu() {
		// debugger;
		localStorage.setItem('toggleMenu$', 'false');
		this.toggleMenu$.next(false);
	}
	showMenu() {
		// debugger;
		localStorage.setItem('toggleMenu$', 'true');
		this.toggleMenu$.next(true);
	}

	sidebarMenu: NavDropdownOption[] = [
		{
			name: 'Todos',
			child: [
				[ 'Categories', '/todo/category' ],
				[ 'Todo List', '/todo/list' ],
			]
		},
		{
			name: 'CMS',
			child: [
				[ 'Butter CMS', '/cms/butter-cms/landing'],
				[ 'Sanity.io', '/cms/sanityio-cms/landing'],
			]
		},
		{
			name: 'Video Players',
			child: [
				['Vimeo', '/video-player/vimeo'],
			]
		}
	]
}
