import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingrisksreportPage } from './emergingrisksreport.page';

describe('EmergingrisksreportPage', () => {
  let component: EmergingrisksreportPage;
  let fixture: ComponentFixture<EmergingrisksreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergingrisksreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergingrisksreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
