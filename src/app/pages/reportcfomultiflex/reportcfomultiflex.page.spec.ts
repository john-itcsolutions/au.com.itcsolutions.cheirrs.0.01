import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcfomultiflexPage } from './reportcfomultiflex.page';

describe('ReportcfomultiflexPage', () => {
  let component: ReportcfomultiflexPage;
  let fixture: ComponentFixture<ReportcfomultiflexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcfomultiflexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcfomultiflexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
