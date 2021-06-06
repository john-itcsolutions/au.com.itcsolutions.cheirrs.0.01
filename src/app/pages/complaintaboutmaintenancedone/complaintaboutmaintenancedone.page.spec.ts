import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintaboutmaintenancedonePage } from './complaintaboutmaintenancedone.page';

describe('ComplaintaboutmaintenancedonePage', () => {
  let component: ComplaintaboutmaintenancedonePage;
  let fixture: ComponentFixture<ComplaintaboutmaintenancedonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintaboutmaintenancedonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintaboutmaintenancedonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
