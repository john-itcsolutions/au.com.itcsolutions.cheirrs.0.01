import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliertxassetsPage } from './suppliertxassets.page';

describe('SuppliertxassetsPage', () => {
  let component: SuppliertxassetsPage;
  let fixture: ComponentFixture<SuppliertxassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliertxassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliertxassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
