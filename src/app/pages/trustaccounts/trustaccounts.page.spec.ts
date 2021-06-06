import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustaccountsPage } from './trustaccounts.page';

describe('TrustaccountsPage', () => {
  let component: TrustaccountsPage;
  let fixture: ComponentFixture<TrustaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustaccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
