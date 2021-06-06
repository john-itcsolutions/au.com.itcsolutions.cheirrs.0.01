import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportceomultiflexPage } from './reportceomultiflex.page';

describe('ReportceomultiflexPage', () => {
  let component: ReportceomultiflexPage;
  let fixture: ComponentFixture<ReportceomultiflexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportceomultiflexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportceomultiflexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
