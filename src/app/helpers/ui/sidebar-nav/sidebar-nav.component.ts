import { Component, Input } from '@angular/core';
import { ISidebarNavItems } from './sidebar-nav';

@Component({
	selector: 'app-sidebar-nav',
	templateUrl: './sidebar-nav.component.html',
	styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {
	@Input() navItems!: ISidebarNavItems[];
	@Input() navWidth!: string;

}
