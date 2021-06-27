import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingacctspayableauditingPage } from './reportingacctspayableauditing.page';

describe('ReportingacctspayableauditingPage', () => {
  let component: ReportingacctspayableauditingPage;
  let fixture: ComponentFixture<ReportingacctspayableauditingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingacctspayableauditingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingacctspayableauditingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
