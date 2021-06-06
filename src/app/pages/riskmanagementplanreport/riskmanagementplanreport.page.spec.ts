import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmanagementplanreportPage } from './riskmanagementplanreport.page';

describe('RiskmanagementplanreportPage', () => {
  let component: RiskmanagementplanreportPage;
  let fixture: ComponentFixture<RiskmanagementplanreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskmanagementplanreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmanagementplanreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
