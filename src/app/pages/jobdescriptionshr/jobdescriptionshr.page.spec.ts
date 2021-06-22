import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdescriptionshrPage } from './jobdescriptionshr.page';

describe('JobdescriptionshrPage', () => {
  let component: JobdescriptionshrPage;
  let fixture: ComponentFixture<JobdescriptionshrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdescriptionshrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdescriptionshrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
