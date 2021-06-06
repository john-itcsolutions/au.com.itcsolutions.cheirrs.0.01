import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmatchtenantstopropsPage } from './schmatchtenantstoprops.page';

describe('SchmatchtenantstopropsPage', () => {
  let component: SchmatchtenantstopropsPage;
  let fixture: ComponentFixture<SchmatchtenantstopropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmatchtenantstopropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmatchtenantstopropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
