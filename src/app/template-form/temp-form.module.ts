import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempFormRoutingModule } from './temp-form-routing.module';
import { TempFormPageComponent } from './temp-form-page/temp-form-page.component';

@NgModule({
	declarations: [TempFormPageComponent],
	imports: [CommonModule, TempFormRoutingModule],
})
export class TempFormModule {}
