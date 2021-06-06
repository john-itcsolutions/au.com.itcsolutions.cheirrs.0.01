import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivemaintrequestPage } from './receivemaintrequest.page';

describe('ReceivemaintrequestPage', () => {
  let component: ReceivemaintrequestPage;
  let fixture: ComponentFixture<ReceivemaintrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivemaintrequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivemaintrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
