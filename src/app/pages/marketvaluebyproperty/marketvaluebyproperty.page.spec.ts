import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketvaluebypropertyPage } from './marketvaluebyproperty.page';

describe('MarketvaluebypropertyPage', () => {
  let component: MarketvaluebypropertyPage;
  let fixture: ComponentFixture<MarketvaluebypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketvaluebypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketvaluebypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
