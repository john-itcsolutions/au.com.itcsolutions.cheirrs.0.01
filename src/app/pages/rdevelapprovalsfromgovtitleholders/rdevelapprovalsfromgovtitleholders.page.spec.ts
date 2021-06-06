import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelapprovalsfromgovtitleholdersPage } from './rdevelapprovalsfromgovtitleholders.page';

describe('RdevelapprovalsfromgovtitleholdersPage', () => {
  let component: RdevelapprovalsfromgovtitleholdersPage;
  let fixture: ComponentFixture<RdevelapprovalsfromgovtitleholdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelapprovalsfromgovtitleholdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelapprovalsfromgovtitleholdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
