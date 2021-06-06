import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevelopapprovalsPage } from './redevelopapprovals.page';

describe('RedevelopapprovalsPage', () => {
  let component: RedevelopapprovalsPage;
  let fixture: ComponentFixture<RedevelopapprovalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedevelopapprovalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedevelopapprovalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
