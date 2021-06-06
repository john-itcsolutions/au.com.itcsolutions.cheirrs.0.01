import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyinspbyhousingmanagerPage } from './propertyinspbyhousingmanager.page';

describe('PropertyinspbyhousingmanagerPage', () => {
  let component: PropertyinspbyhousingmanagerPage;
  let fixture: ComponentFixture<PropertyinspbyhousingmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyinspbyhousingmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyinspbyhousingmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
