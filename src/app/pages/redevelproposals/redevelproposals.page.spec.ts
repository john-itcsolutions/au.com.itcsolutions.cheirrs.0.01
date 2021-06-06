import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevelproposalsPage } from './redevelproposals.page';

describe('RedevelproposalsPage', () => {
  let component: RedevelproposalsPage;
  let fixture: ComponentFixture<RedevelproposalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedevelproposalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedevelproposalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
