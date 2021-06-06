import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcusttxesPage } from './searchcusttxes.page';

describe('SearchcusttxesPage', () => {
  let component: SearchcusttxesPage;
  let fixture: ComponentFixture<SearchcusttxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcusttxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcusttxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
