import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcurrentandpendingcontractsPage } from './listcurrentandpendingcontracts.page';

describe('ListcurrentandpendingcontractsPage', () => {
  let component: ListcurrentandpendingcontractsPage;
  let fixture: ComponentFixture<ListcurrentandpendingcontractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcurrentandpendingcontractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcurrentandpendingcontractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
