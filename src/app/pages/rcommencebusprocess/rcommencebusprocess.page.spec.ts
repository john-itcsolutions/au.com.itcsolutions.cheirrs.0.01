import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcommencebusprocessPage } from './rcommencebusprocess.page';

describe('RcommencebusprocessPage', () => {
  let component: RcommencebusprocessPage;
  let fixture: ComponentFixture<RcommencebusprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcommencebusprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcommencebusprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
