import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhsauditingPage } from './whsauditing.page';

describe('WhsauditingPage', () => {
  let component: WhsauditingPage;
  let fixture: ComponentFixture<WhsauditingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhsauditingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhsauditingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
