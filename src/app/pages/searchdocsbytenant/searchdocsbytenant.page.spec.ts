import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocsbytenantPage } from './searchdocsbytenant.page';

describe('SearchdocsbytenantPage', () => {
  let component: SearchdocsbytenantPage;
  let fixture: ComponentFixture<SearchdocsbytenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocsbytenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocsbytenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
