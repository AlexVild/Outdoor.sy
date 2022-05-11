import { Customer } from 'src/app/customer-table/customer';

export class TestUtils {
	static getMockCustomers(): Customer[] {
		return [{
			firstName: 'Jeff',
			lastName: 'Vild',
			email: 'ajv2324@gmail.com',
			vehicle: {
				type: 'Kia',
				name: 'Soul',
				length: 15
			}
		}, {
			firstName: 'Alex',
			lastName: 'Vild',
			email: 'jsvild@gmail.com',
			vehicle: {
				type: 'Ford',
				name: 'Taurus',
				length: 18
			}
		}];
	}
}