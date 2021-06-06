import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialbalancePage } from './trialbalance.page';

describe('TrialbalancePage', () => {
  let component: TrialbalancePage;
  let fixture: ComponentFixture<TrialbalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialbalancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialbalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
