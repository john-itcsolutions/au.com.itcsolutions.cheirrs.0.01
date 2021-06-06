import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowanalysisandreportPage } from './cashflowanalysisandreport.page';

describe('CashflowanalysisandreportPage', () => {
  let component: CashflowanalysisandreportPage;
  let fixture: ComponentFixture<CashflowanalysisandreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowanalysisandreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowanalysisandreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
