import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
	declarations: [InfoPageComponent],
	imports: [CommonModule, InfoRoutingModule],
})
export class InfoModule {}
