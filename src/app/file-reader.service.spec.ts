import { TestBed } from '@angular/core/testing';

import { FileReaderService } from './file-reader.service';

describe('FileReaderService', () => {
	let service: FileReaderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FileReaderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return an empty list if given an invalid input file', async () => {
		const mockCustomerFile = new File(['Hello World'], 'customers.txt', { type: 'text/plain' });
		const customers = await service.readFile(mockCustomerFile);
		expect(customers.length).toBe(0);
	});

	it('should return a list of customers when provided a CSV', async () => {
		const mockCustomerFile = new File(['Greta,Thunberg,greta@future.com,sailboat,Fridays For Future,32’'], 'customers.txt', { type: 'text/plain' });

		const customers = await service.readFile(mockCustomerFile);

		expect(customers[0].firstName).toBe('Greta');
		expect(customers[0].lastName).toBe('Thunberg');
		expect(customers[0].email).toBe('greta@future.com');
		expect(customers[0].vehicle.type).toBe('sailboat');
		expect(customers[0].vehicle.name).toBe('Fridays For Future');
		expect(customers[0].vehicle.length).toBe(32);
	});
	
	it('should return a list of customers when provided a PSV', async () => {
		const mockCustomerFile = new File(['Greta|Thunberg|greta@future.com|sailboat|Fridays For Future|32 feet'], 'customers.txt', { type: 'text/plain' });

		const customers = await service.readFile(mockCustomerFile);

		expect(customers[0].firstName).toBe('Greta');
		expect(customers[0].lastName).toBe('Thunberg');
		expect(customers[0].email).toBe('greta@future.com');
		expect(customers[0].vehicle.type).toBe('sailboat');
		expect(customers[0].vehicle.name).toBe('Fridays For Future');
		expect(customers[0].vehicle.length).toBe(32);
	});
});
