import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuprentchargingPage } from './setuprentcharging.page';

describe('SetuprentchargingPage', () => {
  let component: SetuprentchargingPage;
  let fixture: ComponentFixture<SetuprentchargingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetuprentchargingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetuprentchargingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
