import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmngmntplanPage } from './riskmngmntplan.page';

describe('RiskmngmntplanPage', () => {
  let component: RiskmngmntplanPage;
  let fixture: ComponentFixture<RiskmngmntplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskmngmntplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmngmntplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
