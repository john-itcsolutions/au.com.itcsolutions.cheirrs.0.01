import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytxPage } from './propertytx.page';

describe('PropertytxPage', () => {
  let component: PropertytxPage;
  let fixture: ComponentFixture<PropertytxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertytxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
