import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Components
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { InfoModule } from './information/info.module';


// Services
import { ConfigService } from './services/config.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TempFormModule } from './template-form/temp-form.module';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		NavmenuComponent,
	],
	imports: [
		AboutModule,
		InfoModule,
		AppRoutingModule,
		BrowserModule,
		HomeModule,
		TempFormModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
		})
		
	],
	providers: [ConfigService],
	bootstrap: [AppComponent],
})
export class AppModule {}
