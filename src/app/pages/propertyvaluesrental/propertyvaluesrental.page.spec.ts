import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyvaluesrentalPage } from './propertyvaluesrental.page';

describe('PropertyvaluesrentalPage', () => {
  let component: PropertyvaluesrentalPage;
  let fixture: ComponentFixture<PropertyvaluesrentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyvaluesrentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyvaluesrentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
