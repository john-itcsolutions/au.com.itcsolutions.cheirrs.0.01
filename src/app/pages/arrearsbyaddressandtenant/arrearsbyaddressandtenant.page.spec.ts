import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearsbyaddressandtenantPage } from './arrearsbyaddressandtenant.page';

describe('ArrearsbyaddressandtenantPage', () => {
  let component: ArrearsbyaddressandtenantPage;
  let fixture: ComponentFixture<ArrearsbyaddressandtenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrearsbyaddressandtenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrearsbyaddressandtenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
