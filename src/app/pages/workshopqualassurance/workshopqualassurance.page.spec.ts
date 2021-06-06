import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopqualassurancePage } from './workshopqualassurance.page';

describe('WorkshopqualassurancePage', () => {
  let component: WorkshopqualassurancePage;
  let fixture: ComponentFixture<WorkshopqualassurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopqualassurancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopqualassurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
