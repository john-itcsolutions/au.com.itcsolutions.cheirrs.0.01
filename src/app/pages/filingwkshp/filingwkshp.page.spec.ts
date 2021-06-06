import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingwkshpPage } from './filingwkshp.page';

describe('FilingwkshpPage', () => {
  let component: FilingwkshpPage;
  let fixture: ComponentFixture<FilingwkshpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingwkshpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingwkshpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
