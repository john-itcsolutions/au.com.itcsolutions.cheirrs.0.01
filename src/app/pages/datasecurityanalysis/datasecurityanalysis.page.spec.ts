import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecurityanalysisPage } from './datasecurityanalysis.page';

describe('DatasecurityanalysisPage', () => {
  let component: DatasecurityanalysisPage;
  let fixture: ComponentFixture<DatasecurityanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasecurityanalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasecurityanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
