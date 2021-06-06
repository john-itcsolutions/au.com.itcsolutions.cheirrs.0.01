import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialbudgetsPage } from './financialbudgets.page';

describe('FinancialbudgetsPage', () => {
  let component: FinancialbudgetsPage;
  let fixture: ComponentFixture<FinancialbudgetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialbudgetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialbudgetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
