import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercontactPage } from './suppliercontact.page';

describe('SuppliercontactPage', () => {
  let component: SuppliercontactPage;
  let fixture: ComponentFixture<SuppliercontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliercontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliercontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
