import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Intro } from '../models/intro.model';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
})
export class AboutPageComponent implements OnInit {
	intro$: Observable<Intro> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.getPageData('pages', 2);
	}

	getPageData(database: string, id?: number): void {
		this.intro$ = this.config.getSettings(database, id);
	}

}
