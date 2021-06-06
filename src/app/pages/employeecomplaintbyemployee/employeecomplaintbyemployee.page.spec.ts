import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecomplaintbyemployeePage } from './employeecomplaintbyemployee.page';

describe('EmployeecomplaintbyemployeePage', () => {
  let component: EmployeecomplaintbyemployeePage;
  let fixture: ComponentFixture<EmployeecomplaintbyemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecomplaintbyemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecomplaintbyemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
