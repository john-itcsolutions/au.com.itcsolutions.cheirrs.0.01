import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoconveyitPage } from './linktoconveyit.page';

describe('LinktoconveyitPage', () => {
  let component: LinktoconveyitPage;
  let fixture: ComponentFixture<LinktoconveyitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoconveyitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoconveyitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
