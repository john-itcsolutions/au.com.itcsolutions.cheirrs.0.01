import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingpayPage } from './filingpay.page';

describe('FilingpayPage', () => {
  let component: FilingpayPage;
  let fixture: ComponentFixture<FilingpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingpayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
