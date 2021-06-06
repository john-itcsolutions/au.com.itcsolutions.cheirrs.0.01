import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepropertyPage } from './purchaseproperty.page';

describe('PurchasepropertyPage', () => {
  let component: PurchasepropertyPage;
  let fixture: ComponentFixture<PurchasepropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
