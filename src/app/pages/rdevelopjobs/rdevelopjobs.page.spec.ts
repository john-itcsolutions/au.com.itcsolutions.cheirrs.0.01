import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopjobsPage } from './rdevelopjobs.page';

describe('RdevelopjobsPage', () => {
  let component: RdevelopjobsPage;
  let fixture: ComponentFixture<RdevelopjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
