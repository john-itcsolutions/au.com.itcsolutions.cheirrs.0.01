import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchacctrecordsbypropassetsPage } from './searchacctrecordsbypropassets.page';

describe('SearchacctrecordsbypropassetsPage', () => {
  let component: SearchacctrecordsbypropassetsPage;
  let fixture: ComponentFixture<SearchacctrecordsbypropassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchacctrecordsbypropassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchacctrecordsbypropassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
