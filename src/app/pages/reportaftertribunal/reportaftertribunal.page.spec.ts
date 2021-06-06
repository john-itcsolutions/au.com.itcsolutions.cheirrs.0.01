import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportaftertribunalPage } from './reportaftertribunal.page';

describe('ReportaftertribunalPage', () => {
  let component: ReportaftertribunalPage;
  let fixture: ComponentFixture<ReportaftertribunalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportaftertribunalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportaftertribunalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
