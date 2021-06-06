import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpayrollPage } from './superpayroll.page';

describe('SuperpayrollPage', () => {
  let component: SuperpayrollPage;
  let fixture: ComponentFixture<SuperpayrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperpayrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpayrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
