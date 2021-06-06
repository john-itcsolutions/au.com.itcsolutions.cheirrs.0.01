import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoconveyitllordspagePage } from './linktoconveyitllordspage.page';

describe('LinktoconveyitllordspagePage', () => {
  let component: LinktoconveyitllordspagePage;
  let fixture: ComponentFixture<LinktoconveyitllordspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoconveyitllordspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoconveyitllordspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
