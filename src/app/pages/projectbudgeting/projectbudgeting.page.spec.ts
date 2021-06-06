import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectbudgetingPage } from './projectbudgeting.page';

describe('ProjectbudgetingPage', () => {
  let component: ProjectbudgetingPage;
  let fixture: ComponentFixture<ProjectbudgetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectbudgetingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectbudgetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
