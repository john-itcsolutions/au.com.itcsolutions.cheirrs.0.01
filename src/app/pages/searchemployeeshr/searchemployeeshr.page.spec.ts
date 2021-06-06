import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeeshrPage } from './searchemployeeshr.page';

describe('SearchemployeeshrPage', () => {
  let component: SearchemployeeshrPage;
  let fixture: ComponentFixture<SearchemployeeshrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemployeeshrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemployeeshrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
