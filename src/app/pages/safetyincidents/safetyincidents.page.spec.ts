import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyincidentsPage } from './safetyincidents.page';

describe('SafetyincidentsPage', () => {
  let component: SafetyincidentsPage;
  let fixture: ComponentFixture<SafetyincidentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyincidentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyincidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
