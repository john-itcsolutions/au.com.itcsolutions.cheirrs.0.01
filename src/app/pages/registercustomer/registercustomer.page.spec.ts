import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercustomerPage } from './registercustomer.page';

describe('RegistercustomerPage', () => {
  let component: RegistercustomerPage;
  let fixture: ComponentFixture<RegistercustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistercustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
