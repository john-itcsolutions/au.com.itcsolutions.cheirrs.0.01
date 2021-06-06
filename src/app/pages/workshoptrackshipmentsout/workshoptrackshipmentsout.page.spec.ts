import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoptrackshipmentsoutPage } from './workshoptrackshipmentsout.page';

describe('WorkshoptrackshipmentsoutPage', () => {
  let component: WorkshoptrackshipmentsoutPage;
  let fixture: ComponentFixture<WorkshoptrackshipmentsoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoptrackshipmentsoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoptrackshipmentsoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
