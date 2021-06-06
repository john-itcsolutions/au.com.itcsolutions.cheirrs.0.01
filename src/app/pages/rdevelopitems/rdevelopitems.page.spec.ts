import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopitemsPage } from './rdevelopitems.page';

describe('RdevelopitemsPage', () => {
  let component: RdevelopitemsPage;
  let fixture: ComponentFixture<RdevelopitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopitemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
