import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeesheetswagesandleavePage } from './timeesheetswagesandleave.page';

describe('TimeesheetswagesandleavePage', () => {
  let component: TimeesheetswagesandleavePage;
  let fixture: ComponentFixture<TimeesheetswagesandleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeesheetswagesandleavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeesheetswagesandleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
