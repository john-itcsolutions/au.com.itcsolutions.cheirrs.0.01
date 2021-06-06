import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierheadersPage } from './supplierheaders.page';

describe('SupplierheadersPage', () => {
  let component: SupplierheadersPage;
  let fixture: ComponentFixture<SupplierheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
