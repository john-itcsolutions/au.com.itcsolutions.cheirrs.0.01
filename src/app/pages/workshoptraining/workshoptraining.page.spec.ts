import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoptrainingPage } from './workshoptraining.page';

describe('WorkshoptrainingPage', () => {
  let component: WorkshoptrainingPage;
  let fixture: ComponentFixture<WorkshoptrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoptrainingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoptrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
