import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteandreplyPage } from './inviteandreply.page';

describe('InviteandreplyPage', () => {
  let component: InviteandreplyPage;
  let fixture: ComponentFixture<InviteandreplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteandreplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteandreplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
