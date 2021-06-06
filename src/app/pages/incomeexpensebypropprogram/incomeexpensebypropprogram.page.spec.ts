import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeexpensebypropprogramPage } from './incomeexpensebypropprogram.page';

describe('IncomeexpensebypropprogramPage', () => {
  let component: IncomeexpensebypropprogramPage;
  let fixture: ComponentFixture<IncomeexpensebypropprogramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeexpensebypropprogramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeexpensebypropprogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
