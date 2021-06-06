import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsPage } from './allocations.page';

describe('AllocationsPage', () => {
  let component: AllocationsPage;
  let fixture: ComponentFixture<AllocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
