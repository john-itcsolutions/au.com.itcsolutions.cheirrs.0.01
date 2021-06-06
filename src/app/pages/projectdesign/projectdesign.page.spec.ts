import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdesignPage } from './projectdesign.page';

describe('ProjectdesignPage', () => {
  let component: ProjectdesignPage;
  let fixture: ComponentFixture<ProjectdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdesignPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
