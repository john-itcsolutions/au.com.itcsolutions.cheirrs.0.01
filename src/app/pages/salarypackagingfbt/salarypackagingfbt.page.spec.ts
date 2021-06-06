import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackagingfbtPage } from './salarypackagingfbt.page';

describe('SalarypackagingfbtPage', () => {
  let component: SalarypackagingfbtPage;
  let fixture: ComponentFixture<SalarypackagingfbtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarypackagingfbtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackagingfbtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
