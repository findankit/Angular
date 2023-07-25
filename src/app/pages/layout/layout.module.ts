import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';




@NgModule({
  declarations: [
    SidebarLayoutComponent,
    NavDropdownComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
		MatSidenavModule,
    MatListModule,
    MatDividerModule,
		MatIconModule,
  ],
	exports: [
		SidebarLayoutComponent
	]
})
export class LayoutModule { }
