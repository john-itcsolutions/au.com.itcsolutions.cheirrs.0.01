import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisknotificationsPage } from './risknotifications.page';

describe('RisknotificationsPage', () => {
  let component: RisknotificationsPage;
  let fixture: ComponentFixture<RisknotificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisknotificationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisknotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
