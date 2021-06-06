import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesagentPage } from './salesagent.page';

describe('SalesagentPage', () => {
  let component: SalesagentPage;
  let fixture: ComponentFixture<SalesagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesagentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
