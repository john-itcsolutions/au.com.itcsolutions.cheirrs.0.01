import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeexpensebybranchPage } from './incomeexpensebybranch.page';

describe('IncomeexpensebybranchPage', () => {
  let component: IncomeexpensebybranchPage;
  let fixture: ComponentFixture<IncomeexpensebybranchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeexpensebybranchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeexpensebybranchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
