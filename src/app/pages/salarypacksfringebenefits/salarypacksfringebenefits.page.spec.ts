import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypacksfringebenefitsPage } from './salarypacksfringebenefits.page';

describe('SalarypacksfringebenefitsPage', () => {
  let component: SalarypacksfringebenefitsPage;
  let fixture: ComponentFixture<SalarypacksfringebenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarypacksfringebenefitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypacksfringebenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
