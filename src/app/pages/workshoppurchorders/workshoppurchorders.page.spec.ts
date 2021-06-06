import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoppurchordersPage } from './workshoppurchorders.page';

describe('WorkshoppurchordersPage', () => {
  let component: WorkshoppurchordersPage;
  let fixture: ComponentFixture<WorkshoppurchordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoppurchordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoppurchordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
