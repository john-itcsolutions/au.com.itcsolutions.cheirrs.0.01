import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherleavePage } from './otherleave.page';

describe('OtherleavePage', () => {
  let component: OtherleavePage;
  let fixture: ComponentFixture<OtherleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherleavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
