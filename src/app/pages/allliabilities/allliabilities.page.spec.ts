import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllliabilitiesPage } from './allliabilities.page';

describe('AllliabilitiesPage', () => {
  let component: AllliabilitiesPage;
  let fixture: ComponentFixture<AllliabilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllliabilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllliabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
