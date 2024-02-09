import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'header',
				tagline: 'A design system for the federal government.',
				title:
					'USWDS provides principles, guidance, and code to help you design and build accessible, mobile-friendly government websites and digital services.',
				buttontext: 'Get Started With USWDS',
				buttonlink: '/about',
			},
			{
				id: 2,
				name: 'intro',
				tagline: 'A GUIDE',
				title: 'How You Can Use the U.S. Web Design System',
				description:
					'Here we will show you a few components available to you via the USWDS.',
			},
			{
				id: 3,
				name: 'info',
				tagline: '',
				title: 'An Example of a Form',
				description:
					'',
			},
			{
				id: 4,
				name: 'temp-form',
				tagline: '',
				title: 'Template for Address Form',
				description:
					'',
			}
		];
		const menu = [
			{ id: 1, title: 'Home', link: '/home' },
			{ id: 2, title: 'Components', link: '/about' },
			{ id: 3, title: 'Form', link: '/information' },
			{ id: 4, title: 'Template', link: '/temp-form' },
		];

		return {
			menu,
			pages,
		};
	}
}
