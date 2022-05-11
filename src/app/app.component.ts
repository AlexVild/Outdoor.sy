import { Component } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Customer } from './customer-table/customer';
import { FileReaderService } from './file-reader.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	faUpload = faUpload;
	public customers: Customer[];

	constructor(private fileReaderService: FileReaderService) {
		this.customers = [];
	}

	async readCustomerFile(event: any) {
		// We only care about the first file selected
		try {
			this.customers = await this.fileReaderService.readFile(event.target.files[0] as File);	
		} catch(e) {
			// for the sake of time, simply log the error here
			console.log(e);
		}
	}
}
