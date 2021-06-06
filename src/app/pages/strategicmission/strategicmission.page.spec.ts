import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicmissionPage } from './strategicmission.page';

describe('StrategicmissionPage', () => {
  let component: StrategicmissionPage;
  let fixture: ComponentFixture<StrategicmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicmissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
