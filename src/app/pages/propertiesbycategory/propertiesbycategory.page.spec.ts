import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesbycategoryPage } from './propertiesbycategory.page';

describe('PropertiesbycategoryPage', () => {
  let component: PropertiesbycategoryPage;
  let fixture: ComponentFixture<PropertiesbycategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesbycategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesbycategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
