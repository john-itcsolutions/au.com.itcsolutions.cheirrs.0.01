import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopqualassurancePage } from './rdevelopqualassurance.page';

describe('RdevelopqualassurancePage', () => {
  let component: RdevelopqualassurancePage;
  let fixture: ComponentFixture<RdevelopqualassurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopqualassurancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopqualassurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
