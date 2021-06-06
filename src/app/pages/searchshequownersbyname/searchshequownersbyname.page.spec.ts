import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchshequownersbynamePage } from './searchshequownersbyname.page';

describe('SearchshequownersbynamePage', () => {
  let component: SearchshequownersbynamePage;
  let fixture: ComponentFixture<SearchshequownersbynamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchshequownersbynamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchshequownersbynamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
