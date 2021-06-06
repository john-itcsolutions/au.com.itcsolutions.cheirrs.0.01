import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbusinessplanPage } from './reportbusinessplan.page';

describe('ReportbusinessplanPage', () => {
  let component: ReportbusinessplanPage;
  let fixture: ComponentFixture<ReportbusinessplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbusinessplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbusinessplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
