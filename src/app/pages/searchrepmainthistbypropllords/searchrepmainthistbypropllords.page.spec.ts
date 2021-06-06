import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepmainthistbypropllordsPage } from './searchrepmainthistbypropllords.page';

describe('SearchrepmainthistbypropllordsPage', () => {
  let component: SearchrepmainthistbypropllordsPage;
  let fixture: ComponentFixture<SearchrepmainthistbypropllordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrepmainthistbypropllordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrepmainthistbypropllordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
