import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsleavePage } from './timesheetsleave.page';

describe('TimesheetsleavePage', () => {
  let component: TimesheetsleavePage;
  let fixture: ComponentFixture<TimesheetsleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetsleavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetsleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
