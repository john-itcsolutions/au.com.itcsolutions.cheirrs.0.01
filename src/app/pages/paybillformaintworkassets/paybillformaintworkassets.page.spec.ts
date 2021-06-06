import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybillformaintworkassetsPage } from './paybillformaintworkassets.page';

describe('PaybillformaintworkassetsPage', () => {
  let component: PaybillformaintworkassetsPage;
  let fixture: ComponentFixture<PaybillformaintworkassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybillformaintworkassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybillformaintworkassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
