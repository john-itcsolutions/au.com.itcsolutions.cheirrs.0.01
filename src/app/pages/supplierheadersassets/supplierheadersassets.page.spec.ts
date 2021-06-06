import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierheadersassetsPage } from './supplierheadersassets.page';

describe('SupplierheadersassetsPage', () => {
  let component: SupplierheadersassetsPage;
  let fixture: ComponentFixture<SupplierheadersassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierheadersassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierheadersassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
