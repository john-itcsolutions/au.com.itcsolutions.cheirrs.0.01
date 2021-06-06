import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingrdevelPage } from './filingrdevel.page';

describe('FilingrdevelPage', () => {
  let component: FilingrdevelPage;
  let fixture: ComponentFixture<FilingrdevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingrdevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingrdevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
