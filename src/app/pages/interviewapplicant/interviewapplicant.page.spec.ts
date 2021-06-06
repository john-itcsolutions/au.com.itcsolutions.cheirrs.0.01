import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewapplicantPage } from './interviewapplicant.page';

describe('InterviewapplicantPage', () => {
  let component: InterviewapplicantPage;
  let fixture: ComponentFixture<InterviewapplicantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewapplicantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewapplicantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
