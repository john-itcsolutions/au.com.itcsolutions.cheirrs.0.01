import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtenantsbyproptenmngmntPage } from './searchtenantsbyproptenmngmnt.page';

describe('SearchtenantsbyproptenmngmntPage', () => {
  let component: SearchtenantsbyproptenmngmntPage;
  let fixture: ComponentFixture<SearchtenantsbyproptenmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtenantsbyproptenmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtenantsbyproptenmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
