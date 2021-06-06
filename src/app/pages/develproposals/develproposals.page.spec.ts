import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelproposalsPage } from './develproposals.page';

describe('DevelproposalsPage', () => {
  let component: DevelproposalsPage;
  let fixture: ComponentFixture<DevelproposalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelproposalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelproposalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
