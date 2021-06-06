import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskelementsPage } from './riskelements.page';

describe('RiskelementsPage', () => {
  let component: RiskelementsPage;
  let fixture: ComponentFixture<RiskelementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskelementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskelementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
