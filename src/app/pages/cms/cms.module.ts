import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsLayoutComponent } from './cms-layout/cms-layout.component';
import { ButterCmsModule } from './butter-cms/butter-cms.module';


@NgModule({
  declarations: [
    CmsLayoutComponent
  ],
  imports: [
    CommonModule,
		ButterCmsModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
