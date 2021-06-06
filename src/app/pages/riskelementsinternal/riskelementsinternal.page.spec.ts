import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskelementsinternalPage } from './riskelementsinternal.page';

describe('RiskelementsinternalPage', () => {
  let component: RiskelementsinternalPage;
  let fixture: ComponentFixture<RiskelementsinternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskelementsinternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskelementsinternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
