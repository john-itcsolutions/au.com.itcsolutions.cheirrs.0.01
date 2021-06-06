import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordsinterfacePage } from './landlordsinterface.page';

describe('LandlordsinterfacePage', () => {
  let component: LandlordsinterfacePage;
  let fixture: ComponentFixture<LandlordsinterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordsinterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordsinterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
