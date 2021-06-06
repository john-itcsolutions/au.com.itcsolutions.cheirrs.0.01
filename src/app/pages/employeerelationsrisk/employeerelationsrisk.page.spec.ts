import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerelationsriskPage } from './employeerelationsrisk.page';

describe('EmployeerelationsriskPage', () => {
  let component: EmployeerelationsriskPage;
  let fixture: ComponentFixture<EmployeerelationsriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeerelationsriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerelationsriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
