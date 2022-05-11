import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Customer } from './customer';

import { CustomerTableComponent } from './customer-table.component';

describe('CustomerTableComponent', () => {
	let component: CustomerTableComponent;
	let fixture: ComponentFixture<CustomerTableComponent>;
	const mockCustomers: Customer[] = [{
		firstName: 'Alex',
		lastName: 'Vild',
		email: 'ajv2324@gmail.com',
		vehicle: {
			type: 'Kia',
			name: 'Soul',
			length: 15
		}
	}, {
		firstName: 'Jeff',
		lastName: 'Vild',
		email: 'jsvild@gmail.com',
		vehicle: {
			type: 'Ford',
			name: 'Taurus',
			length: 18
		}
	}];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CustomerTableComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CustomerTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('when there are no customers', () => {
		describe('the customer table', () => {
			it('should not be visible when there are no valid customers loaded into the component', () => {
				const customerTable = fixture.nativeElement.querySelector('.customer-table');
				
				expect(customerTable).toBeFalsy();
			});
  
			it('should display an error message when no customers are loaded into the component', () => {
				const noCustomerElement = fixture.nativeElement.querySelector('.no-customers-message');
  
				expect(noCustomerElement.textContent).toContain('You must first upload a customer list to view customer data.');
			});
		});
	});

	describe('when there are customers', () => {
		beforeEach(() => {
			component.customers = mockCustomers;
			fixture.detectChanges();
		});

		describe('the customer table', () => {
			it('should be visible when customers are given to the component', () => {
				const customerTable = fixture.nativeElement.querySelector('.customer-table');
  
				expect(customerTable).toBeTruthy();
			});

			it('should not display the "no customers" error', () => {
				const noCustomerElement = fixture.nativeElement.querySelector('.no-customers-message');
        
				expect(noCustomerElement).toBeFalsy();
			});

			it('should display customer data for each customer given by the input', () => {
				const customerRows = fixture.nativeElement.querySelectorAll('.customer-row');

				expect(customerRows.length).toBe(mockCustomers.length);
        
				expect(fixture.nativeElement.querySelector('#first-name-0').textContent).toBe('Alex');
				expect(fixture.nativeElement.querySelector('#last-name-0').textContent).toBe('Vild');
				expect(fixture.nativeElement.querySelector('#email-0').textContent).toBe('ajv2324@gmail.com');
				expect(fixture.nativeElement.querySelector('#vehicle-type-0').textContent).toBe('Kia');
				expect(fixture.nativeElement.querySelector('#vehicle-name-0').textContent).toBe('Soul');
				expect(fixture.nativeElement.querySelector('#vehicle-size-0').textContent).toBe('15 ft.');

				expect(fixture.nativeElement.querySelector('#first-name-1').textContent).toBe('Jeff');
				expect(fixture.nativeElement.querySelector('#last-name-1').textContent).toBe('Vild');
				expect(fixture.nativeElement.querySelector('#email-1').textContent).toBe('jsvild@gmail.com');
				expect(fixture.nativeElement.querySelector('#vehicle-type-1').textContent).toBe('Ford');
				expect(fixture.nativeElement.querySelector('#vehicle-name-1').textContent).toBe('Taurus');
				expect(fixture.nativeElement.querySelector('#vehicle-size-1').textContent).toBe('17 ft.');
			});
		});
	});
});
