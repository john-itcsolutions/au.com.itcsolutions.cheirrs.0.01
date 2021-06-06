import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsuppliertxesPage } from './searchsuppliertxes.page';

describe('SearchsuppliertxesPage', () => {
  let component: SearchsuppliertxesPage;
  let fixture: ComponentFixture<SearchsuppliertxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsuppliertxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsuppliertxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
