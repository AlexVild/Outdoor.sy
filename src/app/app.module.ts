import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
	declarations: [
		AppComponent,
		CustomerTableComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
