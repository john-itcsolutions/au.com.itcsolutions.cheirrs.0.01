import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepairsmainthistbyproplettingPage } from './searchrepairsmainthistbypropletting.page';

describe('SearchrepairsmainthistbyproplettingPage', () => {
  let component: SearchrepairsmainthistbyproplettingPage;
  let fixture: ComponentFixture<SearchrepairsmainthistbyproplettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrepairsmainthistbyproplettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrepairsmainthistbyproplettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
