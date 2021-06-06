import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceshequmtgePage } from './refinanceshequmtge.page';

describe('RefinanceshequmtgePage', () => {
  let component: RefinanceshequmtgePage;
  let fixture: ComponentFixture<RefinanceshequmtgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanceshequmtgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceshequmtgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
