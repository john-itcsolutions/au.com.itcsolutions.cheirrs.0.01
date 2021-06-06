import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueordersPage } from './overdueorders.page';

describe('OverdueordersPage', () => {
  let component: OverdueordersPage;
  let fixture: ComponentFixture<OverdueordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
