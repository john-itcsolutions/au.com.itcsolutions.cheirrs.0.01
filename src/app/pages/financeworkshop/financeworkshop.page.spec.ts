import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceworkshopPage } from './financeworkshop.page';

describe('FinanceworkshopPage', () => {
  let component: FinanceworkshopPage;
  let fixture: ComponentFixture<FinanceworkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceworkshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceworkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
