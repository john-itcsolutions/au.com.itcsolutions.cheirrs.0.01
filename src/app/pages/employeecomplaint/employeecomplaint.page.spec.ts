import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecomplaintPage } from './employeecomplaint.page';

describe('EmployeecomplaintPage', () => {
  let component: EmployeecomplaintPage;
  let fixture: ComponentFixture<EmployeecomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
