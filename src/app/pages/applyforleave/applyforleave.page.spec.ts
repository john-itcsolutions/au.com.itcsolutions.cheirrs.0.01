import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyforleavePage } from './applyforleave.page';

describe('ApplyforleavePage', () => {
  let component: ApplyforleavePage;
  let fixture: ComponentFixture<ApplyforleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyforleavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyforleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
