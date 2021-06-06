import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingtsheetsPage } from './filingtsheets.page';

describe('FilingtsheetsPage', () => {
  let component: FilingtsheetsPage;
  let fixture: ComponentFixture<FilingtsheetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingtsheetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingtsheetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
