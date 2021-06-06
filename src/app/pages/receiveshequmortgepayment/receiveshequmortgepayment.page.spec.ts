import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveshequmortgepaymentPage } from './receiveshequmortgepayment.page';

describe('ReceiveshequmortgepaymentPage', () => {
  let component: ReceiveshequmortgepaymentPage;
  let fixture: ComponentFixture<ReceiveshequmortgepaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveshequmortgepaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveshequmortgepaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
