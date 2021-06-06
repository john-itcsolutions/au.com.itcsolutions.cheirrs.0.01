import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicplanPage } from './strategicplan.page';

describe('StrategicplanPage', () => {
  let component: StrategicplanPage;
  let fixture: ComponentFixture<StrategicplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
