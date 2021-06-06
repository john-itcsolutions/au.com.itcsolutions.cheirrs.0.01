import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialreportsPage } from './financialreports.page';

describe('FinancialreportsPage', () => {
  let component: FinancialreportsPage;
  let fixture: ComponentFixture<FinancialreportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialreportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialreportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
