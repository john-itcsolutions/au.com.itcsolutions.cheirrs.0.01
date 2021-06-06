import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterleadPage } from './registerlead.page';

describe('RegisterleadPage', () => {
  let component: RegisterleadPage;
  let fixture: ComponentFixture<RegisterleadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterleadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterleadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
