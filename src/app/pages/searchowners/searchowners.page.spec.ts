import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchownersPage } from './searchowners.page';

describe('SearchownersPage', () => {
  let component: SearchownersPage;
  let fixture: ComponentFixture<SearchownersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchownersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchownersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
