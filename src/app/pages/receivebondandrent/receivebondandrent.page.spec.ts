import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivebondandrentPage } from './receivebondandrent.page';

describe('ReceivebondandrentPage', () => {
  let component: ReceivebondandrentPage;
  let fixture: ComponentFixture<ReceivebondandrentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivebondandrentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivebondandrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
