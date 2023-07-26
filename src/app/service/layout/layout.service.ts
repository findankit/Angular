import { Injectable } from '@angular/core';
import { NavDropdownOption } from 'src/app/pages/layout/nav-dropdown/nav-dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

	sidebarMenu: NavDropdownOption[]  = [
		{
			name: 'Todos',
			child:
			[
				['Todo List', '/todo/list'],
			]
		},
	]
}
