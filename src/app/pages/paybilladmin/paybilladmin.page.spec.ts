import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybilladminPage } from './paybilladmin.page';

describe('PaybilladminPage', () => {
  let component: PaybilladminPage;
  let fixture: ComponentFixture<PaybilladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybilladminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybilladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
