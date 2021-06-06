import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsinPage } from './returnsin.page';

describe('ReturnsinPage', () => {
  let component: ReturnsinPage;
  let fixture: ComponentFixture<ReturnsinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
