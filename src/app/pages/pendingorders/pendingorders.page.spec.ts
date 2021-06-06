import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingordersPage } from './pendingorders.page';

describe('PendingordersPage', () => {
  let component: PendingordersPage;
  let fixture: ComponentFixture<PendingordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
