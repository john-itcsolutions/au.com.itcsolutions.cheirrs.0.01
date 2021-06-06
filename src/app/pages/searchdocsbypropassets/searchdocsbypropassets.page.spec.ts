import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocsbypropassetsPage } from './searchdocsbypropassets.page';

describe('SearchdocsbypropassetsPage', () => {
  let component: SearchdocsbypropassetsPage;
  let fixture: ComponentFixture<SearchdocsbypropassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocsbypropassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocsbypropassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
