import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentapplicantcomplaintPage } from './employmentapplicantcomplaint.page';

describe('EmploymentapplicantcomplaintPage', () => {
  let component: EmploymentapplicantcomplaintPage;
  let fixture: ComponentFixture<EmploymentapplicantcomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentapplicantcomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentapplicantcomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
