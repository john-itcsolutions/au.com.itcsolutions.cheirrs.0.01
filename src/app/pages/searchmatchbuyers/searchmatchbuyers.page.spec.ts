import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmatchbuyersPage } from './searchmatchbuyers.page';

describe('SearchmatchbuyersPage', () => {
  let component: SearchmatchbuyersPage;
  let fixture: ComponentFixture<SearchmatchbuyersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmatchbuyersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmatchbuyersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
