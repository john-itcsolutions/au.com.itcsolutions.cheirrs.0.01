import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollhrPage } from './payrollhr.page';

describe('PayrollhrPage', () => {
  let component: PayrollhrPage;
  let fixture: ComponentFixture<PayrollhrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollhrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollhrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
