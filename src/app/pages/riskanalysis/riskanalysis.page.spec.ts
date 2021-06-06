import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskanalysisPage } from './riskanalysis.page';

describe('RiskanalysisPage', () => {
  let component: RiskanalysisPage;
  let fixture: ComponentFixture<RiskanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
