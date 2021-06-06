import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicopportunitiesPage } from './strategicopportunities.page';

describe('StrategicopportunitiesPage', () => {
  let component: StrategicopportunitiesPage;
  let fixture: ComponentFixture<StrategicopportunitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicopportunitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicopportunitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
