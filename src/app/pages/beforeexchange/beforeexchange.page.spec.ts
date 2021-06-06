import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeexchangePage } from './beforeexchange.page';

describe('BeforeexchangePage', () => {
  let component: BeforeexchangePage;
  let fixture: ComponentFixture<BeforeexchangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeexchangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeexchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
