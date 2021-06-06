import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrworkshopPage } from './hrworkshop.page';

describe('HrworkshopPage', () => {
  let component: HrworkshopPage;
  let fixture: ComponentFixture<HrworkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrworkshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrworkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
