import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { TempForm } from '../models/temp-form.model';

@Component({
	selector: 'app-temp-form-page',
	templateUrl: './temp-form-page.component.html',
})
export class TempFormPageComponent implements OnInit {
	form$: Observable<TempForm> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.getPageData('pages', 4);
	}

	getPageData(database: string, id?: number): void {
		this.form$ = this.config.getSettings(database, id);
	}

}
