import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicswotanalysisPage } from './strategicswotanalysis.page';

describe('StrategicswotanalysisPage', () => {
  let component: StrategicswotanalysisPage;
  let fixture: ComponentFixture<StrategicswotanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicswotanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicswotanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
