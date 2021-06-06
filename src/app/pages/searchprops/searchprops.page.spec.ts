import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpropsPage } from './searchprops.page';

describe('SearchpropsPage', () => {
  let component: SearchpropsPage;
  let fixture: ComponentFixture<SearchpropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
