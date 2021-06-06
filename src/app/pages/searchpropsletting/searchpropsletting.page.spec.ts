import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpropslettingPage } from './searchpropsletting.page';

describe('SearchpropslettingPage', () => {
  let component: SearchpropslettingPage;
  let fixture: ComponentFixture<SearchpropslettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpropslettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpropslettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
