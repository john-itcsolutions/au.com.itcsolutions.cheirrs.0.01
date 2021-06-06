import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmtchinvestorstopropscrmPage } from './schmtchinvestorstopropscrm.page';

describe('SchmtchinvestorstopropscrmPage', () => {
  let component: SchmtchinvestorstopropscrmPage;
  let fixture: ComponentFixture<SchmtchinvestorstopropscrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmtchinvestorstopropscrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmtchinvestorstopropscrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
