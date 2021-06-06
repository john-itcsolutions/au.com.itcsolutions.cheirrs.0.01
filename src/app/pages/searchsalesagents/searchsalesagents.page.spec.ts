import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsalesagentsPage } from './searchsalesagents.page';

describe('SearchsalesagentsPage', () => {
  let component: SearchsalesagentsPage;
  let fixture: ComponentFixture<SearchsalesagentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsalesagentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsalesagentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
