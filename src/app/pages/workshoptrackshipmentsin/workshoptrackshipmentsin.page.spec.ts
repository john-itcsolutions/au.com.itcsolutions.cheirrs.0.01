import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoptrackshipmentsinPage } from './workshoptrackshipmentsin.page';

describe('WorkshoptrackshipmentsinPage', () => {
  let component: WorkshoptrackshipmentsinPage;
  let fixture: ComponentFixture<WorkshoptrackshipmentsinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoptrackshipmentsinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoptrackshipmentsinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
