import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyagreementPage } from './agencyagreement.page';

describe('AgencyagreementPage', () => {
  let component: AgencyagreementPage;
  let fixture: ComponentFixture<AgencyagreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyagreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyagreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
