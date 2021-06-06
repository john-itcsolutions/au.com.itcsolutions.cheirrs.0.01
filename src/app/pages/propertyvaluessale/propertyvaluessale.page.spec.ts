import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyvaluessalePage } from './propertyvaluessale.page';

describe('PropertyvaluessalePage', () => {
  let component: PropertyvaluessalePage;
  let fixture: ComponentFixture<PropertyvaluessalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyvaluessalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyvaluessalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
