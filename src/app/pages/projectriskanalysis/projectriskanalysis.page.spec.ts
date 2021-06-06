import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectriskanalysisPage } from './projectriskanalysis.page';

describe('ProjectriskanalysisPage', () => {
  let component: ProjectriskanalysisPage;
  let fixture: ComponentFixture<ProjectriskanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectriskanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectriskanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
