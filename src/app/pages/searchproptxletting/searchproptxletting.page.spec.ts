import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproptxlettingPage } from './searchproptxletting.page';

describe('SearchproptxlettingPage', () => {
  let component: SearchproptxlettingPage;
  let fixture: ComponentFixture<SearchproptxlettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproptxlettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproptxlettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
