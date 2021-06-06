import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingjnlentryPage } from './accountingjnlentry.page';

describe('AccountingjnlentryPage', () => {
  let component: AccountingjnlentryPage;
  let fixture: ComponentFixture<AccountingjnlentryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingjnlentryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingjnlentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
