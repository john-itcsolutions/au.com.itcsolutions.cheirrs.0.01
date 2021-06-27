import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingacctsrecvableauditingPage } from './reportingacctsrecvableauditing.page';

describe('ReportingacctsrecvableauditingPage', () => {
  let component: ReportingacctsrecvableauditingPage;
  let fixture: ComponentFixture<ReportingacctsrecvableauditingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingacctsrecvableauditingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingacctsrecvableauditingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
