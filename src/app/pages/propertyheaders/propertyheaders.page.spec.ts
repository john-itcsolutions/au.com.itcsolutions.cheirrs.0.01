import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyheadersPage } from './propertyheaders.page';

describe('PropertyheadersPage', () => {
  let component: PropertyheadersPage;
  let fixture: ComponentFixture<PropertyheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
