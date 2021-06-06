import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantsvoidsreportPage } from './vacantsvoidsreport.page';

describe('VacantsvoidsreportPage', () => {
  let component: VacantsvoidsreportPage;
  let fixture: ComponentFixture<VacantsvoidsreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantsvoidsreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantsvoidsreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
