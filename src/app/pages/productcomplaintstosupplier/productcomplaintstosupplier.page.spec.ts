import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcomplaintstosupplierPage } from './productcomplaintstosupplier.page';

describe('ProductcomplaintstosupplierPage', () => {
  let component: ProductcomplaintstosupplierPage;
  let fixture: ComponentFixture<ProductcomplaintstosupplierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcomplaintstosupplierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcomplaintstosupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
