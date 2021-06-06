import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdeveloppurchordersPage } from './rdeveloppurchorders.page';

describe('RdeveloppurchordersPage', () => {
  let component: RdeveloppurchordersPage;
  let fixture: ComponentFixture<RdeveloppurchordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdeveloppurchordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdeveloppurchordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
