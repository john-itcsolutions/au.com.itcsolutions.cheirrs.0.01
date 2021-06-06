import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchshequownersbypropertyPage } from './searchshequownersbyproperty.page';

describe('SearchshequownersbypropertyPage', () => {
  let component: SearchshequownersbypropertyPage;
  let fixture: ComponentFixture<SearchshequownersbypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchshequownersbypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchshequownersbypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
