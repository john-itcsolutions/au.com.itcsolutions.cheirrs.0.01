import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationPage } from './taxation.page';

describe('TaxationPage', () => {
  let component: TaxationPage;
  let fixture: ComponentFixture<TaxationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
