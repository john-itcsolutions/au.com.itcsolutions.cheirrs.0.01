import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecurityauditPage } from './datasecurityaudit.page';

describe('DatasecurityauditPage', () => {
  let component: DatasecurityauditPage;
  let fixture: ComponentFixture<DatasecurityauditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasecurityauditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasecurityauditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
