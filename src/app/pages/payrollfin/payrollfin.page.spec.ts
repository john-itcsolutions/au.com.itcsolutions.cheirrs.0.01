import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollfinPage } from './payrollfin.page';

describe('PayrollfinPage', () => {
  let component: PayrollfinPage;
  let fixture: ComponentFixture<PayrollfinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollfinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollfinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
