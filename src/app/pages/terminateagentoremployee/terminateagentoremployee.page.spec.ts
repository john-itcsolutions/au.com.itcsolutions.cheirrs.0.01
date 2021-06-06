import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateagentoremployeePage } from './terminateagentoremployee.page';

describe('TerminateagentoremployeePage', () => {
  let component: TerminateagentoremployeePage;
  let fixture: ComponentFixture<TerminateagentoremployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateagentoremployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateagentoremployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
