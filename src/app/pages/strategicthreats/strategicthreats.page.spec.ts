import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicthreatsPage } from './strategicthreats.page';

describe('StrategicthreatsPage', () => {
  let component: StrategicthreatsPage;
  let fixture: ComponentFixture<StrategicthreatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicthreatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicthreatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
