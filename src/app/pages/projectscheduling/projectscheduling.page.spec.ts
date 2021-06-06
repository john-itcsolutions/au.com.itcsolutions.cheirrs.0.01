import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectschedulingPage } from './projectscheduling.page';

describe('ProjectschedulingPage', () => {
  let component: ProjectschedulingPage;
  let fixture: ComponentFixture<ProjectschedulingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectschedulingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectschedulingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
