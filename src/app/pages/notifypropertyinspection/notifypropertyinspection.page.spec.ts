import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifypropertyinspectionPage } from './notifypropertyinspection.page';

describe('NotifypropertyinspectionPage', () => {
  let component: NotifypropertyinspectionPage;
  let fixture: ComponentFixture<NotifypropertyinspectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifypropertyinspectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifypropertyinspectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
