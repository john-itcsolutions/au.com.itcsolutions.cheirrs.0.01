import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttenantPage } from './selecttenant.page';

describe('SelecttenantPage', () => {
  let component: SelecttenantPage;
  let fixture: ComponentFixture<SelecttenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
