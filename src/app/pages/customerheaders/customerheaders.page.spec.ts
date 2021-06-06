import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerheadersPage } from './customerheaders.page';

describe('CustomerheadersPage', () => {
  let component: CustomerheadersPage;
  let fixture: ComponentFixture<CustomerheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
