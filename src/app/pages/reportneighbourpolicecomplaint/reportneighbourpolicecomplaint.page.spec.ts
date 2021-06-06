import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportneighbourpolicecomplaintPage } from './reportneighbourpolicecomplaint.page';

describe('ReportneighbourpolicecomplaintPage', () => {
  let component: ReportneighbourpolicecomplaintPage;
  let fixture: ComponentFixture<ReportneighbourpolicecomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportneighbourpolicecomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportneighbourpolicecomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
