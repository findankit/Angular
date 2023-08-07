import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsLayoutComponent } from './cms-layout/cms-layout.component';

const routes: Routes = [
	{
		path: 'butter-cms',
		component: CmsLayoutComponent,
		loadChildren: () => import('./butter-cms/butter-cms.module').then(e => e.ButterCmsModule),
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule { }
