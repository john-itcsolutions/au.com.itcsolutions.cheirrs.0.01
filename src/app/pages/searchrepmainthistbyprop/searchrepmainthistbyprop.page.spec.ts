import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepmainthistbypropPage } from './searchrepmainthistbyprop.page';

describe('SearchrepmainthistbypropPage', () => {
  let component: SearchrepmainthistbypropPage;
  let fixture: ComponentFixture<SearchrepmainthistbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrepmainthistbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrepmainthistbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
