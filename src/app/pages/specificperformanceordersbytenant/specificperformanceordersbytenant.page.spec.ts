import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificperformanceordersbytenantPage } from './specificperformanceordersbytenant.page';

describe('SpecificperformanceordersbytenantPage', () => {
  let component: SpecificperformanceordersbytenantPage;
  let fixture: ComponentFixture<SpecificperformanceordersbytenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificperformanceordersbytenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificperformanceordersbytenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
