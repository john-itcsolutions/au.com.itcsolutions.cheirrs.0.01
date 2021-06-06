import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchextenantsofproplettingPage } from './searchextenantsofpropletting.page';

describe('SearchextenantsofproplettingPage', () => {
  let component: SearchextenantsofproplettingPage;
  let fixture: ComponentFixture<SearchextenantsofproplettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchextenantsofproplettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchextenantsofproplettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
