import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescommtimesheetPage } from './salescommtimesheet.page';

describe('SalescommtimesheetPage', () => {
  let component: SalescommtimesheetPage;
  let fixture: ComponentFixture<SalescommtimesheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescommtimesheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescommtimesheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
