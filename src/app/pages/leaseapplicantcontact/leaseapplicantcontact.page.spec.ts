import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseapplicantcontactPage } from './leaseapplicantcontact.page';

describe('LeaseapplicantcontactPage', () => {
  let component: LeaseapplicantcontactPage;
  let fixture: ComponentFixture<LeaseapplicantcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseapplicantcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseapplicantcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
