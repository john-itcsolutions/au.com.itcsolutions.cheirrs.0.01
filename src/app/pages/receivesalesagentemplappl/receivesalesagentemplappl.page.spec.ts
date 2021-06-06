import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivesalesagentemplapplPage } from './receivesalesagentemplappl.page';

describe('ReceivesalesagentemplapplPage', () => {
  let component: ReceivesalesagentemplapplPage;
  let fixture: ComponentFixture<ReceivesalesagentemplapplPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivesalesagentemplapplPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivesalesagentemplapplPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
