import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleasePage } from './signlease.page';

describe('SignleasePage', () => {
  let component: SignleasePage;
  let fixture: ComponentFixture<SignleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignleasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
