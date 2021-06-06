import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfinancialanalysisPage } from './projectfinancialanalysis.page';

describe('ProjectfinancialanalysisPage', () => {
  let component: ProjectfinancialanalysisPage;
  let fixture: ComponentFixture<ProjectfinancialanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectfinancialanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectfinancialanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
