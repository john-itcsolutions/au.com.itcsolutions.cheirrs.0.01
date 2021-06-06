import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackfringebenefitsPage } from './salarypackfringebenefits.page';

describe('SalarypackfringebenefitsPage', () => {
  let component: SalarypackfringebenefitsPage;
  let fixture: ComponentFixture<SalarypackfringebenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarypackfringebenefitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackfringebenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
