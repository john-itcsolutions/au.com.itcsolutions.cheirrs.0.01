import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargebondandrentinadvancePage } from './chargebondandrentinadvance.page';

describe('ChargebondandrentinadvancePage', () => {
  let component: ChargebondandrentinadvancePage;
  let fixture: ComponentFixture<ChargebondandrentinadvancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargebondandrentinadvancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargebondandrentinadvancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
