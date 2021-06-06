import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivebillforworkPage } from './receivebillforwork.page';

describe('ReceivebillforworkPage', () => {
  let component: ReceivebillforworkPage;
  let fixture: ComponentFixture<ReceivebillforworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivebillforworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivebillforworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
