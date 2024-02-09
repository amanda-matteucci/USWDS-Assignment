import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Info } from '../models/info.model';

@Component({
	selector: 'app-info-page',
	templateUrl: './info-page.component.html',
})
export class InfoPageComponent implements OnInit {
	info$: Observable<Info> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.getPageData('pages', 3);
	}

	getPageData(database: string, id?: number): void {
		this.info$ = this.config.getSettings(database, id);
	}

}
