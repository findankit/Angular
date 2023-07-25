import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent {
	@Input() option = new NavDropdownOption();
	expand = false;
	nowActive() {
		return 'active';
	}
}

export class NavDropdownOption {
	name!: string;
	child?: [fieldname: string, routerPath: string][];
}