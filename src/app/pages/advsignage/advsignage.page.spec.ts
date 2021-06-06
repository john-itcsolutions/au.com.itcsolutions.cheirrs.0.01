import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvsignagePage } from './advsignage.page';

describe('AdvsignagePage', () => {
  let component: AdvsignagePage;
  let fixture: ComponentFixture<AdvsignagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvsignagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvsignagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
