import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestUtils } from 'src/test-util/mock-customers';
import { Customer } from './customer';

import { CustomerTableComponent } from './customer-table.component';

describe('CustomerTableComponent', () => {
	let component: CustomerTableComponent;
	let fixture: ComponentFixture<CustomerTableComponent>;
	const mockCustomers: Customer[] = TestUtils.getMockCustomers();

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

			it('sort options are not visible', () => {
				const sortElements = fixture.nativeElement.querySelector('.sort-options');
  
				expect(sortElements).toBeFalsy();
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
        
				for(let i = 0; i < mockCustomers.length; i++){ 
					expect(fixture.nativeElement.querySelector(`#first-name-${i}`).textContent).toBe(`${mockCustomers[i].firstName}`);
					expect(fixture.nativeElement.querySelector(`#last-name-${i}`).textContent).toBe(`${mockCustomers[i].lastName}`);
					expect(fixture.nativeElement.querySelector(`#email-${i}`).textContent).toBe(`${mockCustomers[i].email}`);
					expect(fixture.nativeElement.querySelector(`#vehicle-type-${i}`).textContent).toBe(`${mockCustomers[i].vehicle.type}`);
					expect(fixture.nativeElement.querySelector(`#vehicle-name-${i}`).textContent).toBe(`${mockCustomers[i].vehicle.name}`);
					expect(fixture.nativeElement.querySelector(`#vehicle-length-${i}`).textContent).toBe(`${mockCustomers[i].vehicle.length} ft.`);
				}
			});
		});

		describe('sorting', () => {
			it('clicking vehicle sort sorts table by vehicle', () => {
				const vehicleSort = fixture.nativeElement.querySelector('#vehicle-sort') as HTMLInputElement;
				vehicleSort.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				for (let i = 0; i < mockCustomers.length - 1; i++) {
					const greaterVal: string = fixture.nativeElement.querySelector(`#vehicle-type-${i}`).textContent;
					const lesserVal: string = fixture.nativeElement.querySelector(`#vehicle-type-${i + 1}`).textContent;

					expect(greaterVal.localeCompare(lesserVal)).toBe(-1);
				}
			});

			it('clicking full name sort sorts table by first and last names', () => {
				const nameSort = fixture.nativeElement.querySelector('#name-sort') as HTMLInputElement;
				nameSort.dispatchEvent(new Event('click'));
				fixture.detectChanges();

				for (let i = 0; i < mockCustomers.length - 1; i++) {
					const greaterFirstName: string = fixture.nativeElement.querySelector(`#first-name-${i}`).textContent;
					const greaterLastName: string = fixture.nativeElement.querySelector(`#last-name-${i}`).textContent;
					const lesserFirstName: string = fixture.nativeElement.querySelector(`#first-name-${i + 1}`).textContent;
					const lesserLastName: string = fixture.nativeElement.querySelector(`#last-name-${i + 1}`).textContent;

					const greaterName = `${greaterFirstName} ${greaterLastName}`;
					const lesserName = `${lesserFirstName} ${lesserLastName}`;

					expect(greaterName.localeCompare(lesserName)).toBe(-1);
				}
			});
		});
	});
});
