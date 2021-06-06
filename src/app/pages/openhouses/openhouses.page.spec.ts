import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenhousesPage } from './openhouses.page';

describe('OpenhousesPage', () => {
  let component: OpenhousesPage;
  let fixture: ComponentFixture<OpenhousesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenhousesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenhousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
