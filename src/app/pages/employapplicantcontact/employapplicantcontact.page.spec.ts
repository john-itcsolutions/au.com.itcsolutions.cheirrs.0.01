import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployapplicantcontactPage } from './employapplicantcontact.page';

describe('EmployapplicantcontactPage', () => {
  let component: EmployapplicantcontactPage;
  let fixture: ComponentFixture<EmployapplicantcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployapplicantcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployapplicantcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
