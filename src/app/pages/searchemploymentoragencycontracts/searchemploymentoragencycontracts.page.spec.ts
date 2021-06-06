import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemploymentoragencycontractsPage } from './searchemploymentoragencycontracts.page';

describe('SearchemploymentoragencycontractsPage', () => {
  let component: SearchemploymentoragencycontractsPage;
  let fixture: ComponentFixture<SearchemploymentoragencycontractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemploymentoragencycontractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemploymentoragencycontractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
