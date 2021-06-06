import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopPage } from './rdevelop.page';

describe('RdevelopPage', () => {
  let component: RdevelopPage;
  let fixture: ComponentFixture<RdevelopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
