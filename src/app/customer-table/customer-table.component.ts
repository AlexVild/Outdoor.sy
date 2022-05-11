import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Customer } from './customer';

enum SortType {
	VEHICLE,
	FULL_NAME,
}

@Component({
	selector: 'customer-table',
	templateUrl: './customer-table.component.html',
	styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
	faAngleDown = faAngleDown;
	SortType = SortType; // access enum in template

	@Input()
	public customers?: Customer[];

	public sortCustomers(type: SortType): void {
		if (type === SortType.VEHICLE) {
			this.customers?.sort((a: Customer, b: Customer) => {
				return a.vehicle.type.localeCompare(b.vehicle.type);
			});
		} else {
			this.customers?.sort((a: Customer, b: Customer) => {
				const nameA = `${a.firstName} ${a.lastName}`;
				const nameB = `${b.firstName} ${b.lastName}`;

				return nameA.localeCompare(nameB);
			});
		}
	}
}
