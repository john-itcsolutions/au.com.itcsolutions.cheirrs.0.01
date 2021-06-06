import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopassembliefourthlevelPage } from './workshopassembliefourthlevel.page';

describe('WorkshopassembliefourthlevelPage', () => {
  let component: WorkshopassembliefourthlevelPage;
  let fixture: ComponentFixture<WorkshopassembliefourthlevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopassembliefourthlevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopassembliefourthlevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
