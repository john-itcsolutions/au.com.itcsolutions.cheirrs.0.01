import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritytoaccountPage } from './authoritytoaccount.page';

describe('AuthoritytoaccountPage', () => {
  let component: AuthoritytoaccountPage;
  let fixture: ComponentFixture<AuthoritytoaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritytoaccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritytoaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
