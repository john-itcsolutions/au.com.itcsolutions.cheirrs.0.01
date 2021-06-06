import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstreamPage } from './superstream.page';

describe('SuperstreamPage', () => {
  let component: SuperstreamPage;
  let fixture: ComponentFixture<SuperstreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstreamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
