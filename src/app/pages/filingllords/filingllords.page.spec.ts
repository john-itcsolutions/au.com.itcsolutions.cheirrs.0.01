import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingllordsPage } from './filingllords.page';

describe('FilingllordsPage', () => {
  let component: FilingllordsPage;
  let fixture: ComponentFixture<FilingllordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingllordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingllordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
