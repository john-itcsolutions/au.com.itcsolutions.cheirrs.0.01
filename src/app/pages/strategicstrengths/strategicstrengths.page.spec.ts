import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicstrengthsPage } from './strategicstrengths.page';

describe('StrategicstrengthsPage', () => {
  let component: StrategicstrengthsPage;
  let fixture: ComponentFixture<StrategicstrengthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicstrengthsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicstrengthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
