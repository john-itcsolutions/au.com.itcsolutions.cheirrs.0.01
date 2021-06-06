import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteremployeePage } from './registeremployee.page';

describe('RegisteremployeePage', () => {
  let component: RegisteremployeePage;
  let fixture: ComponentFixture<RegisteremployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteremployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteremployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
