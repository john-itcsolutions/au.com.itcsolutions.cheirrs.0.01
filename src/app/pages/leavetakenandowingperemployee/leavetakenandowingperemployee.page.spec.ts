import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetakenandowingperemployeePage } from './leavetakenandowingperemployee.page';

describe('LeavetakenandowingperemployeePage', () => {
  let component: LeavetakenandowingperemployeePage;
  let fixture: ComponentFixture<LeavetakenandowingperemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetakenandowingperemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetakenandowingperemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
