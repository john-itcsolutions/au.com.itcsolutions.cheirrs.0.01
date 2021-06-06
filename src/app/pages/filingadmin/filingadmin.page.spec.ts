import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingadminPage } from './filingadmin.page';

describe('FilingadminPage', () => {
  let component: FilingadminPage;
  let fixture: ComponentFixture<FilingadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
