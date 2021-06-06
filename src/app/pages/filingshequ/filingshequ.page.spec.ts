import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingshequPage } from './filingshequ.page';

describe('FilingshequPage', () => {
  let component: FilingshequPage;
  let fixture: ComponentFixture<FilingshequPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingshequPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingshequPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
