import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchownerscrmPage } from './searchownerscrm.page';

describe('SearchownerscrmPage', () => {
  let component: SearchownerscrmPage;
  let fixture: ComponentFixture<SearchownerscrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchownerscrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchownerscrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
