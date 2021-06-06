import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparefortribunalPage } from './preparefortribunal.page';

describe('PreparefortribunalPage', () => {
  let component: PreparefortribunalPage;
  let fixture: ComponentFixture<PreparefortribunalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparefortribunalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparefortribunalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
