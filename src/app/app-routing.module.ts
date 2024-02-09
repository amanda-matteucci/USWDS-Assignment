import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then(mod => mod.HomeModule),
	},
	{
		path: 'about',
		loadChildren: () =>
			import('./about/about.module').then(mod => mod.AboutModule),
	},
	{
		path: 'information',
		loadChildren: () =>
			import('./information/info.module').then(mod => mod.InfoModule),
	},
	{
		path: 'temp-form',
		loadChildren: () =>
			import('./template-form/temp-form.module').then(mod => mod.TempFormModule),
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}