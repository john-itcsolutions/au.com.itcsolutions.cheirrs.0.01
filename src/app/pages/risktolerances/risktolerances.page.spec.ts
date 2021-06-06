import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisktolerancesPage } from './risktolerances.page';

describe('RisktolerancesPage', () => {
  let component: RisktolerancesPage;
  let fixture: ComponentFixture<RisktolerancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisktolerancesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisktolerancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
