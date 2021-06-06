import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproptxesPage } from './searchproptxes.page';

describe('SearchproptxesPage', () => {
  let component: SearchproptxesPage;
  let fixture: ComponentFixture<SearchproptxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproptxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproptxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
