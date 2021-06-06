import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsreceivablePage } from './accountsreceivable.page';

describe('AccountsreceivablePage', () => {
  let component: AccountsreceivablePage;
  let fixture: ComponentFixture<AccountsreceivablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsreceivablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsreceivablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
