import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmtchinvestorstopropsPage } from './schmtchinvestorstoprops.page';

describe('SchmtchinvestorstopropsPage', () => {
  let component: SchmtchinvestorstopropsPage;
  let fixture: ComponentFixture<SchmtchinvestorstopropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmtchinvestorstopropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmtchinvestorstopropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
