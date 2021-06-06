import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopconstrrequirementsPage } from './rdevelopconstrrequirements.page';

describe('RdevelopconstrrequirementsPage', () => {
  let component: RdevelopconstrrequirementsPage;
  let fixture: ComponentFixture<RdevelopconstrrequirementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopconstrrequirementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopconstrrequirementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
