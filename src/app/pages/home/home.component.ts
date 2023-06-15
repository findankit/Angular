import { Component } from '@angular/core';
import { ISidebarNavItems } from 'src/app/helpers/ui/sidebar-nav/sidebar-nav';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	applications: ISidebarNavItems[] = [
		{
			routing: ['Rough', '/app/rough'],
			// author: ['ankit', ''],
			navChild: [
				{
					routing: ['Template Driven Forms', '/template-forms'],

				}
			]
		},
		{
			routing: ['Todo', '/app/todo'],
			// author: ['ankit', 'https://github.com/findankit'],
		}
	]
}
