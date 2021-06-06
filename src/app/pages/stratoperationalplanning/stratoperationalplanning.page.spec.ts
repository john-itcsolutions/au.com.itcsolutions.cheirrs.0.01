import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratoperationalplanningPage } from './stratoperationalplanning.page';

describe('StratoperationalplanningPage', () => {
  let component: StratoperationalplanningPage;
  let fixture: ComponentFixture<StratoperationalplanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratoperationalplanningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratoperationalplanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
