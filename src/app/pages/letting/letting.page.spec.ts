import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettingPage } from './letting.page';

describe('LettingPage', () => {
  let component: LettingPage;
  let fixture: ComponentFixture<LettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
