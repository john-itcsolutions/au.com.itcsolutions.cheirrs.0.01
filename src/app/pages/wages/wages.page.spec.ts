import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesPage } from './wages.page';

describe('WagesPage', () => {
  let component: WagesPage;
  let fixture: ComponentFixture<WagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
