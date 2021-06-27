import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocsbyshequpropertyPage } from './searchdocsbyshequproperty.page';

describe('SearchdocsbyshequpropertyPage', () => {
  let component: SearchdocsbyshequpropertyPage;
  let fixture: ComponentFixture<SearchdocsbyshequpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocsbyshequpropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocsbyshequpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
