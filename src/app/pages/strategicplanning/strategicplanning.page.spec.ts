import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicplanningPage } from './strategicplanning.page';

describe('StrategicplanningPage', () => {
  let component: StrategicplanningPage;
  let fixture: ComponentFixture<StrategicplanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicplanningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicplanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
