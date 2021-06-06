import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysellenquiriesPage } from './buysellenquiries.page';

describe('BuysellenquiriesPage', () => {
  let component: BuysellenquiriesPage;
  let fixture: ComponentFixture<BuysellenquiriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuysellenquiriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuysellenquiriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
