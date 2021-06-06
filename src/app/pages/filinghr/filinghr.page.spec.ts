import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilinghrPage } from './filinghr.page';

describe('FilinghrPage', () => {
  let component: FilinghrPage;
  let fixture: ComponentFixture<FilinghrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilinghrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilinghrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
