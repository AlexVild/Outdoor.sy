import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableComponent } from './customer-table.component';

describe('CustomerTableComponent', () => {
	let component: CustomerTableComponent;
	let fixture: ComponentFixture<CustomerTableComponent>;

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

	describe('the customer table', () => {
		it('should not be visible when there are no valid customers loaded into the component', () => {
			const noCustomerElement = fixture.nativeElement.querySelector('.no-customers-message');
			const customerTable = fixture.nativeElement.querySelector('.customer-table');

			expect(noCustomerElement).toBeTruthy();
			expect(customerTable).toBeFalsy();
		});

		it('should be visible when customers are given to the component', () => {
			const noCustomerElement = fixture.nativeElement.querySelector('.no-customers-message');
			const customerTable = fixture.nativeElement.querySelector('.customer-table');

			expect(customerTable).toBeTruthy();
			expect(noCustomerElement).toBeFalsy();
		});

		it('should display an error message when no customers are loaded into the component', () => {
			const noCustomerElement = fixture.nativeElement.querySelector('.no-customers-message');

			expect(noCustomerElement.textContent).toContain('You must first upload a customer list to view customer data.');
		});
	});
});
