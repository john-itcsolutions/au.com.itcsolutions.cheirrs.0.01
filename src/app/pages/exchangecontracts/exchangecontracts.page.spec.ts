import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangecontractsPage } from './exchangecontracts.page';

describe('ExchangecontractsPage', () => {
  let component: ExchangecontractsPage;
  let fixture: ComponentFixture<ExchangecontractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangecontractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangecontractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
