import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsLayoutComponent } from './cms-layout/cms-layout.component';

const routes: Routes = [
	{
		path: '',
		component: CmsLayoutComponent,
		children: [
			{
				path: 'butter-cms',
				loadChildren: () => import('./butter-cms/butter-cms.module').then(e => e.ButterCmsModule),
			},
			{
				path: 'sanityio-cms',
				loadChildren: () => import('./sanityio/sanityio.module').then(e => e.SanityioModule),
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule { }
