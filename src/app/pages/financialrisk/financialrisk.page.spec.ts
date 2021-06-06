import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialriskPage } from './financialrisk.page';

describe('FinancialriskPage', () => {
  let component: FinancialriskPage;
  let fixture: ComponentFixture<FinancialriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
