import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityheadersPage } from './communityheaders.page';

describe('CommunityheadersPage', () => {
  let component: CommunityheadersPage;
  let fixture: ComponentFixture<CommunityheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
