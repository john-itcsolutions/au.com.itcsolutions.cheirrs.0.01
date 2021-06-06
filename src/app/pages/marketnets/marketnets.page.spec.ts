import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketnetsPage } from './marketnets.page';

describe('MarketnetsPage', () => {
  let component: MarketnetsPage;
  let fixture: ComponentFixture<MarketnetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketnetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketnetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
