import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedequownercomplaintPage } from './sharedequownercomplaint.page';

describe('SharedequownercomplaintPage', () => {
  let component: SharedequownercomplaintPage;
  let fixture: ComponentFixture<SharedequownercomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedequownercomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedequownercomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
