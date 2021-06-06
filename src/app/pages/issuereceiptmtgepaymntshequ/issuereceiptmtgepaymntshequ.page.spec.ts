import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuereceiptmtgepaymntshequPage } from './issuereceiptmtgepaymntshequ.page';

describe('IssuereceiptmtgepaymntshequPage', () => {
  let component: IssuereceiptmtgepaymntshequPage;
  let fixture: ComponentFixture<IssuereceiptmtgepaymntshequPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuereceiptmtgepaymntshequPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuereceiptmtgepaymntshequPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
