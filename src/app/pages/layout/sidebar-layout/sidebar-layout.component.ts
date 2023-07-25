import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map } from 'rxjs';
import { NavDropdownOption } from '../nav-dropdown/nav-dropdown.component';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {
  showDropdown = false;
	height = '';
	toggleMenu$ = new BehaviorSubject(true);
	toggleMenu() {
		let value = !this.toggleMenu$.value;
		localStorage.setItem('toggleMenu$', value.toString());
		this.toggleMenu$.next(!this.toggleMenu$.value);
	}
	setHeight() {
		this.height = (window.innerHeight - 0.1) + 'px';
	}

	windowResize$ = fromEvent(window, 'resize').pipe(
		debounceTime(15)
	);

	ngOnInit() {
		let menuToggleStatus = localStorage.getItem('toggleMenu$');
		this.toggleMenu$.next(menuToggleStatus === 'true');
		this.setHeight();
		this.windowResize$.subscribe(event => this.setHeight());
	}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

	sidebarMenuItems: NavDropdownOption[]  = [
		{
			name: 'Abc',
			child:
			[
				['new field', '/forms/add-new-field'],
				['topic', '/topics'],
			]
		},
		{
			name: 'Dev',
			child:
			[
				['new field', '/forms/add-new-field2'],
				['topic', '/topics1'],
			]
		},
		{
			name: 'Jkl',
			child:
			[
				['jkl field', '/forms/add-new-field1'],
				['topic', '/topic2'],
			]
		},
	]

	selectedMenuItem = '';
	menuItemClick(event: NavDropdownOption) {
		this.selectedMenuItem = event.name;
	}
}
