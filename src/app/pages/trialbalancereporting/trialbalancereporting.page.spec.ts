import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialbalancereportingPage } from './trialbalancereporting.page';

describe('TrialbalancereportingPage', () => {
  let component: TrialbalancereportingPage;
  let fixture: ComponentFixture<TrialbalancereportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialbalancereportingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialbalancereportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
