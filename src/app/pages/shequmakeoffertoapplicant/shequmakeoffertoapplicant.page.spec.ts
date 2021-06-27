import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequmakeoffertoapplicantPage } from './shequmakeoffertoapplicant.page';

describe('ShequmakeoffertoapplicantPage', () => {
  let component: ShequmakeoffertoapplicantPage;
  let fixture: ComponentFixture<ShequmakeoffertoapplicantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequmakeoffertoapplicantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequmakeoffertoapplicantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
