import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportoperationalplanPage } from './reportoperationalplan.page';

describe('ReportoperationalplanPage', () => {
  let component: ReportoperationalplanPage;
  let fixture: ComponentFixture<ReportoperationalplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportoperationalplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportoperationalplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
