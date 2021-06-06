import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingassetmaintbudgetsPage } from './rollingassetmaintbudgets.page';

describe('RollingassetmaintbudgetsPage', () => {
  let component: RollingassetmaintbudgetsPage;
  let fixture: ComponentFixture<RollingassetmaintbudgetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingassetmaintbudgetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingassetmaintbudgetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
