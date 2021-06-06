import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestrustacctingPage } from './salestrustaccting.page';

describe('SalestrustacctingPage', () => {
  let component: SalestrustacctingPage;
  let fixture: ComponentFixture<SalestrustacctingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalestrustacctingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestrustacctingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
