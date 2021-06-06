import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollliabilitiesPage } from './payrollliabilities.page';

describe('PayrollliabilitiesPage', () => {
  let component: PayrollliabilitiesPage;
  let fixture: ComponentFixture<PayrollliabilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollliabilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollliabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
