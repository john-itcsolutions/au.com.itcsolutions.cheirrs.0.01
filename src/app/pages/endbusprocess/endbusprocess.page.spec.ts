import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbusprocessPage } from './endbusprocess.page';

describe('EndbusprocessPage', () => {
  let component: EndbusprocessPage;
  let fixture: ComponentFixture<EndbusprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndbusprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbusprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
