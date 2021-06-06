import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliertxesPage } from './suppliertxes.page';

describe('SuppliertxesPage', () => {
  let component: SuppliertxesPage;
  let fixture: ComponentFixture<SuppliertxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliertxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliertxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
