import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectresourcesPage } from './projectresources.page';

describe('ProjectresourcesPage', () => {
  let component: ProjectresourcesPage;
  let fixture: ComponentFixture<ProjectresourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectresourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectresourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
