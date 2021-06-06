import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblistingsPage } from './weblistings.page';

describe('WeblistingsPage', () => {
  let component: WeblistingsPage;
  let fixture: ComponentFixture<WeblistingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeblistingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeblistingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
