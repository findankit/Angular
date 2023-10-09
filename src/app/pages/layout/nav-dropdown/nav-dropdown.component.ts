import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent implements OnChanges {
	@Input() option: any = new NavDropdownOption();
	@Input() expandInput = true;
	@Input() IsParent = true;
	@Input() child!: child;
	expand = false;
	nowActive() {
		return 'active';
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(!changes['expandInput']?.currentValue) this.expand = false;
	}
	

	log = console.log;
}


type child = [name: string, routerPath: string, child?: NavDropdownChild][];
export class NavDropdownChild {
	child?: child;
}
export class NavDropdownOption extends NavDropdownChild {
	name!: string;
	routerPath?: string;
}