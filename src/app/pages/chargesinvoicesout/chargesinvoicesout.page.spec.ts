import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesinvoicesoutPage } from './chargesinvoicesout.page';

describe('ChargesinvoicesoutPage', () => {
  let component: ChargesinvoicesoutPage;
  let fixture: ComponentFixture<ChargesinvoicesoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargesinvoicesoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesinvoicesoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
