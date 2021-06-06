import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertotenantPage } from './offertotenant.page';

describe('OffertotenantPage', () => {
  let component: OffertotenantPage;
  let fixture: ComponentFixture<OffertotenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertotenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertotenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
