import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempFormPageComponent } from './temp-form-page/temp-form-page.component';

const routes: Routes = [
	{
		path: '',
		component: TempFormPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TempFormRoutingModule {}
