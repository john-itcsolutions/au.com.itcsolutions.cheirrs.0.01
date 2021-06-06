import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryofpropertyissuesbypropPage } from './summaryofpropertyissuesbyprop.page';

describe('SummaryofpropertyissuesbypropPage', () => {
  let component: SummaryofpropertyissuesbypropPage;
  let fixture: ComponentFixture<SummaryofpropertyissuesbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryofpropertyissuesbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryofpropertyissuesbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
