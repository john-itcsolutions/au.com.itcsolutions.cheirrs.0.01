import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchacctsrecordsbypropllordspagePage } from './searchacctsrecordsbypropllordspage.page';

describe('SearchacctsrecordsbypropllordspagePage', () => {
  let component: SearchacctsrecordsbypropllordspagePage;
  let fixture: ComponentFixture<SearchacctsrecordsbypropllordspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchacctsrecordsbypropllordspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchacctsrecordsbypropllordspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
