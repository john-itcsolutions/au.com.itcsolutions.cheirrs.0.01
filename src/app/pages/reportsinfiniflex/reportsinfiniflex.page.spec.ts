import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsinfiniflexPage } from './reportsinfiniflex.page';

describe('ReportsinfiniflexPage', () => {
  let component: ReportsinfiniflexPage;
  let fixture: ComponentFixture<ReportsinfiniflexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsinfiniflexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsinfiniflexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
