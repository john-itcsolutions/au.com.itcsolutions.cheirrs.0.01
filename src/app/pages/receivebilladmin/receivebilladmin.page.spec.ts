import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivebilladminPage } from './receivebilladmin.page';

describe('ReceivebilladminPage', () => {
  let component: ReceivebilladminPage;
  let fixture: ComponentFixture<ReceivebilladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivebilladminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivebilladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
