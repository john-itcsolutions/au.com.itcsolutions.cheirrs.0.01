import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmatchinvestorstopropsPage } from './schmatchinvestorstoprops.page';

describe('SchmatchinvestorstopropsPage', () => {
  let component: SchmatchinvestorstopropsPage;
  let fixture: ComponentFixture<SchmatchinvestorstopropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmatchinvestorstopropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmatchinvestorstopropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
