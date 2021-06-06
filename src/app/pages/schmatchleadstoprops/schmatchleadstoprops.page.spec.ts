import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmatchleadstopropsPage } from './schmatchleadstoprops.page';

describe('SchmatchleadstopropsPage', () => {
  let component: SchmatchleadstopropsPage;
  let fixture: ComponentFixture<SchmatchleadstopropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmatchleadstopropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmatchleadstopropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
