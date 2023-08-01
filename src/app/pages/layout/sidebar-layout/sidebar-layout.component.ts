import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map } from 'rxjs';
import { NavDropdownComponent, NavDropdownOption } from '../nav-dropdown/nav-dropdown.component';
import { LayoutService } from 'src/app/service/layout/layout.service';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {
  showDropdown = false;
	height = '';
	// toggleMenu$ = new BehaviorSubject(true);
	toggleMenu$ = this.service.toggleMenu$;
	toggleMenu = this.service.toggleMenu;


	constructor(
		private service: LayoutService,
	) {}

	// toggleMenu() {
	// 	let value = !this.toggleMenu$.value;
	// 	localStorage.setItem('toggleMenu$', value.toString());
	// 	this.toggleMenu$.next(!this.toggleMenu$.value);
	// }

	setHeight() {
		this.height = (window.innerHeight - 0.1) + 'px';
	}
	
	ngOnInit() {
		let menuToggleStatus = localStorage.getItem('toggleMenu$');
		this.toggleMenu$.next(menuToggleStatus === 'true');
		this.setHeight();

		fromEvent(window, 'resize')
		.pipe( debounceTime(15))
		.subscribe(event => this.setHeight());
	}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

	sidebarMenuItems = this.service.sidebarMenu;

	@ViewChildren('navdropdown') navdropdown!: QueryList<NavDropdownComponent>;
	menuItemClick(event: NavDropdownOption) {
		this.navdropdown.forEach(el => {
			if(el.option.name !== event.name) {
				el.expand = false;
			}
		})
	}
}
