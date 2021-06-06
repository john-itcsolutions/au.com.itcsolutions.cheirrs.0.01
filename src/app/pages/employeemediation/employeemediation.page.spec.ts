import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemediationPage } from './employeemediation.page';

describe('EmployeemediationPage', () => {
  let component: EmployeemediationPage;
  let fixture: ComponentFixture<EmployeemediationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemediationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemediationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
