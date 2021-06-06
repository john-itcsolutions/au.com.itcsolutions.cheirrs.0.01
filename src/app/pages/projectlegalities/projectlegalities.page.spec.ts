import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlegalitiesPage } from './projectlegalities.page';

describe('ProjectlegalitiesPage', () => {
  let component: ProjectlegalitiesPage;
  let fixture: ComponentFixture<ProjectlegalitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlegalitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlegalitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
