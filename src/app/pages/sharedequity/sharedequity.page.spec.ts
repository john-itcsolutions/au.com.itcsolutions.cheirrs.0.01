import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedequityPage } from './sharedequity.page';

describe('SharedequityPage', () => {
  let component: SharedequityPage;
  let fixture: ComponentFixture<SharedequityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedequityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedequityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
