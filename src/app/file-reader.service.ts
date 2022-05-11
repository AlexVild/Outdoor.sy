import { Injectable } from '@angular/core';
import { Customer } from './customer-table/customer';

@Injectable({
	providedIn: 'root'
})
export class FileReaderService {

	public async readFile(customerFile: File): Promise<Customer[]> {
		try {
			const customers: Customer[] = [];

			const data = await customerFile.text();
			const contents = data;
			const lines = contents?.toString().split(/\r?\n/);
			lines?.forEach((line: string) => {
				if (line.includes(',')) {
					customers.push(this.lineToCustomer(line, ','));
				} else if (line.includes('|')) {
					customers.push(this.lineToCustomer(line, '|'));
				} else {
					throw 'The customer file given is not properly formatted.';
				}
			});
			
			return customers;
		} catch (e) {
			console.log(e);
			return [];
		}
	}

	private lineToCustomer(line: string, separator: string): Customer {
		const columns = line.split(separator);
		return {
			firstName: columns[0],
			lastName: columns[1],
			email: columns[2],
			vehicle: {
				type: columns[3],
				name: columns[4],
				length: Number.parseInt(columns[5]),
			}
		};
	}
}
