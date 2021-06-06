import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsellersPage } from './searchsellers.page';

describe('SearchsellersPage', () => {
  let component: SearchsellersPage;
  let fixture: ComponentFixture<SearchsellersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsellersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsellersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
