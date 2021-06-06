import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstrategicplanPage } from './reportstrategicplan.page';

describe('ReportstrategicplanPage', () => {
  let component: ReportstrategicplanPage;
  let fixture: ComponentFixture<ReportstrategicplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportstrategicplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstrategicplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
