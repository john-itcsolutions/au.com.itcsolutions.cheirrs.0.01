import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmitigationPage } from './riskmitigation.page';

describe('RiskmitigationPage', () => {
  let component: RiskmitigationPage;
  let fixture: ComponentFixture<RiskmitigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskmitigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmitigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
