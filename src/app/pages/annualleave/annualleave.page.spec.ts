import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualleavePage } from './annualleave.page';

describe('AnnualleavePage', () => {
  let component: AnnualleavePage;
  let fixture: ComponentFixture<AnnualleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualleavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
