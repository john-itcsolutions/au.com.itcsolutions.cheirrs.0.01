import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnertransactionsPage } from './ownertransactions.page';

describe('OwnertransactionsPage', () => {
  let component: OwnertransactionsPage;
  let fixture: ComponentFixture<OwnertransactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnertransactionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnertransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
