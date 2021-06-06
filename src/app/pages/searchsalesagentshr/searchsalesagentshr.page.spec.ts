import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsalesagentshrPage } from './searchsalesagentshr.page';

describe('SearchsalesagentshrPage', () => {
  let component: SearchsalesagentshrPage;
  let fixture: ComponentFixture<SearchsalesagentshrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsalesagentshrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsalesagentshrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
