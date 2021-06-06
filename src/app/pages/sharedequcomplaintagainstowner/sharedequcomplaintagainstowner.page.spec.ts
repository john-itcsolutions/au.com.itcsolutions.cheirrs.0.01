import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedequcomplaintagainstownerPage } from './sharedequcomplaintagainstowner.page';

describe('SharedequcomplaintagainstownerPage', () => {
  let component: SharedequcomplaintagainstownerPage;
  let fixture: ComponentFixture<SharedequcomplaintagainstownerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedequcomplaintagainstownerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedequcomplaintagainstownerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
