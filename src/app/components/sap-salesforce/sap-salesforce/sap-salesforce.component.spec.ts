import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapSalesforceComponent } from './sap-salesforce.component';

describe('SapSalesforceComponent', () => {
  let component: SapSalesforceComponent;
  let fixture: ComponentFixture<SapSalesforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapSalesforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
