import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhsriskPage } from './whsrisk.page';

describe('WhsriskPage', () => {
  let component: WhsriskPage;
  let fixture: ComponentFixture<WhsriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhsriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhsriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
