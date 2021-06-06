import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitereplyPage } from './invitereply.page';

describe('InvitereplyPage', () => {
  let component: InvitereplyPage;
  let fixture: ComponentFixture<InvitereplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitereplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitereplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
