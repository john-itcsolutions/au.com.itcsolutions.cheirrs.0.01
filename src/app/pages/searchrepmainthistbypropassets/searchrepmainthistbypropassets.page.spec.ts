import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepmainthistbypropassetsPage } from './searchrepmainthistbypropassets.page';

describe('SearchrepmainthistbypropassetsPage', () => {
  let component: SearchrepmainthistbypropassetsPage;
  let fixture: ComponentFixture<SearchrepmainthistbypropassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrepmainthistbypropassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrepmainthistbypropassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
