import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageagreementPage } from './mortgageagreement.page';

describe('MortgageagreementPage', () => {
  let component: MortgageagreementPage;
  let fixture: ComponentFixture<MortgageagreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageagreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageagreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
