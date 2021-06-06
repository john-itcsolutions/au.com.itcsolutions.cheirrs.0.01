import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftrainingPage } from './stafftraining.page';

describe('StafftrainingPage', () => {
  let component: StafftrainingPage;
  let fixture: ComponentFixture<StafftrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafftrainingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafftrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
