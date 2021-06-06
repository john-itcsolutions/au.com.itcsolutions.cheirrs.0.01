import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperannuationPage } from './superannuation.page';

describe('SuperannuationPage', () => {
  let component: SuperannuationPage;
  let fixture: ComponentFixture<SuperannuationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperannuationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperannuationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
