import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesbypropertyPage } from './amenitiesbyproperty.page';

describe('AmenitiesbypropertyPage', () => {
  let component: AmenitiesbypropertyPage;
  let fixture: ComponentFixture<AmenitiesbypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenitiesbypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitiesbypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
