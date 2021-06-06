import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmtchleadstopropsPage } from './schmtchleadstoprops.page';

describe('SchmtchleadstopropsPage', () => {
  let component: SchmtchleadstopropsPage;
  let fixture: ComponentFixture<SchmtchleadstopropsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmtchleadstopropsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmtchleadstopropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
