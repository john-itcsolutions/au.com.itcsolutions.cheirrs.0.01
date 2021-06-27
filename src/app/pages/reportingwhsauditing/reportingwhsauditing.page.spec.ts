import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingwhsauditingPage } from './reportingwhsauditing.page';

describe('ReportingwhsauditingPage', () => {
  let component: ReportingwhsauditingPage;
  let fixture: ComponentFixture<ReportingwhsauditingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingwhsauditingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingwhsauditingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
