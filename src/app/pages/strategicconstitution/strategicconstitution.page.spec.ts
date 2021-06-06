import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicconstitutionPage } from './strategicconstitution.page';

describe('StrategicconstitutionPage', () => {
  let component: StrategicconstitutionPage;
  let fixture: ComponentFixture<StrategicconstitutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicconstitutionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicconstitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
