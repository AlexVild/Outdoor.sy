import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Customer } from './customer';

@Component({
	selector: 'customer-table',
	templateUrl: './customer-table.component.html',
	styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
	faAngleDown = faAngleDown;

	@Input()
	public customers?: Customer[];

	constructor() { }

	ngOnInit(): void {
	}

}
