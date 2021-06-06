import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementPage } from './settlement.page';

describe('SettlementPage', () => {
  let component: SettlementPage;
  let fixture: ComponentFixture<SettlementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
