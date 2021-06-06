import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcurrentbusprocessesPage } from './listcurrentbusprocesses.page';

describe('ListcurrentbusprocessesPage', () => {
  let component: ListcurrentbusprocessesPage;
  let fixture: ComponentFixture<ListcurrentbusprocessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcurrentbusprocessesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcurrentbusprocessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
