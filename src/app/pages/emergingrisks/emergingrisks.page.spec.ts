import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingrisksPage } from './emergingrisks.page';

describe('EmergingrisksPage', () => {
  let component: EmergingrisksPage;
  let fixture: ComponentFixture<EmergingrisksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergingrisksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergingrisksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
