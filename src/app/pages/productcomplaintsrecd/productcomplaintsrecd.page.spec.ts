import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcomplaintsrecdPage } from './productcomplaintsrecd.page';

describe('ProductcomplaintsrecdPage', () => {
  let component: ProductcomplaintsrecdPage;
  let fixture: ComponentFixture<ProductcomplaintsrecdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcomplaintsrecdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcomplaintsrecdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
