import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketvaluebypropertypropPage } from './marketvaluebypropertyprop.page';

describe('MarketvaluebypropertypropPage', () => {
  let component: MarketvaluebypropertypropPage;
  let fixture: ComponentFixture<MarketvaluebypropertypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketvaluebypropertypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketvaluebypropertypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
