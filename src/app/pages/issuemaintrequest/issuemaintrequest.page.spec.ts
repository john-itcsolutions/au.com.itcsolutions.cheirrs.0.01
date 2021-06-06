import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuemaintrequestPage } from './issuemaintrequest.page';

describe('IssuemaintrequestPage', () => {
  let component: IssuemaintrequestPage;
  let fixture: ComponentFixture<IssuemaintrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuemaintrequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuemaintrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
