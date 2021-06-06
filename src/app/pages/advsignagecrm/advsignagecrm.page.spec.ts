import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvsignagecrmPage } from './advsignagecrm.page';

describe('AdvsignagecrmPage', () => {
  let component: AdvsignagecrmPage;
  let fixture: ComponentFixture<AdvsignagecrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvsignagecrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvsignagecrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
