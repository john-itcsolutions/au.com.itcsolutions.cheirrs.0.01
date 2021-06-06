import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchextenantsofpropertyPage } from './searchextenantsofproperty.page';

describe('SearchextenantsofpropertyPage', () => {
  let component: SearchextenantsofpropertyPage;
  let fixture: ComponentFixture<SearchextenantsofpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchextenantsofpropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchextenantsofpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
