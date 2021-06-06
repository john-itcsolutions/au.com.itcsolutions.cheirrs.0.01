import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoconveyitsalesPage } from './linktoconveyitsales.page';

describe('LinktoconveyitsalesPage', () => {
  let component: LinktoconveyitsalesPage;
  let fixture: ComponentFixture<LinktoconveyitsalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoconveyitsalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoconveyitsalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
