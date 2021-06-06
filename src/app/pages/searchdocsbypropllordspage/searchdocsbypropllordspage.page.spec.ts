import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocsbypropllordspagePage } from './searchdocsbypropllordspage.page';

describe('SearchdocsbypropllordspagePage', () => {
  let component: SearchdocsbypropllordspagePage;
  let fixture: ComponentFixture<SearchdocsbypropllordspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocsbypropllordspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocsbypropllordspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
