import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvlpfundingsubmissionsPage } from './rdvlpfundingsubmissions.page';

describe('RdvlpfundingsubmissionsPage', () => {
  let component: RdvlpfundingsubmissionsPage;
  let fixture: ComponentFixture<RdvlpfundingsubmissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvlpfundingsubmissionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvlpfundingsubmissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
