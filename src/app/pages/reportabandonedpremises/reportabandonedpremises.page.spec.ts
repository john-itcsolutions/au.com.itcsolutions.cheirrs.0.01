import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportabandonedpremisesPage } from './reportabandonedpremises.page';

describe('ReportabandonedpremisesPage', () => {
  let component: ReportabandonedpremisesPage;
  let fixture: ComponentFixture<ReportabandonedpremisesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportabandonedpremisesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportabandonedpremisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
