import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchacctsrecordsbypropPage } from './searchacctsrecordsbyprop.page';

describe('SearchacctsrecordsbypropPage', () => {
  let component: SearchacctsrecordsbypropPage;
  let fixture: ComponentFixture<SearchacctsrecordsbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchacctsrecordsbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchacctsrecordsbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
