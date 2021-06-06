import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivebillformaintworkassetsPage } from './receivebillformaintworkassets.page';

describe('ReceivebillformaintworkassetsPage', () => {
  let component: ReceivebillformaintworkassetsPage;
  let fixture: ComponentFixture<ReceivebillformaintworkassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivebillformaintworkassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivebillformaintworkassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
