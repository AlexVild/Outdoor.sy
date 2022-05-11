import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent, MockProvider } from 'ng-mocks';
import { TestUtils } from 'src/test-util/mock-customers';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { FileReaderService } from './file-reader.service';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let fileReaderServiceMock;

	beforeEach(async () => {
		fileReaderServiceMock = jasmine.createSpyObj(['readFile']);
		fileReaderServiceMock.readFile.and.returnValue(TestUtils.getMockCustomers());

		await TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				MockComponent(CustomerTableComponent),
			],
			providers: [
				{ provide: FileReaderService, useValue: fileReaderServiceMock }
			]
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should pass customers property to CustomerTableComponent', () => {
		const customerTableComponent = fixture.debugElement.query(By.css('customer-table')).componentInstance as CustomerTableComponent;

		expect(customerTableComponent.customers).toEqual([]);
	});

	it('when the customer upload button is pressed, we populate the customers property using the file reader service', fakeAsync(() => {
		const uploadButton = fixture.debugElement.nativeElement.querySelector('#customer-upload') as HTMLInputElement;
		const customerTableComponent = fixture.debugElement.query(By.css('customer-table')).componentInstance as CustomerTableComponent;

		uploadButton.dispatchEvent(new Event('change'));
		tick();
		fixture.detectChanges();
		expect(customerTableComponent.customers).toEqual(TestUtils.getMockCustomers());
	}));
});
