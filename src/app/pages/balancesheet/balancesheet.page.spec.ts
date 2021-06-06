import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesheetPage } from './balancesheet.page';

describe('BalancesheetPage', () => {
  let component: BalancesheetPage;
  let fixture: ComponentFixture<BalancesheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancesheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancesheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
