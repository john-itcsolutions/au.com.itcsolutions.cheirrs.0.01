import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitycontactPage } from './communitycontact.page';

describe('CommunitycontactPage', () => {
  let component: CommunitycontactPage;
  let fixture: ComponentFixture<CommunitycontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitycontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitycontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
