import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelsumissionstogovtitleholdersPage } from './rdevelsumissionstogovtitleholders.page';

describe('RdevelsumissionstogovtitleholdersPage', () => {
  let component: RdevelsumissionstogovtitleholdersPage;
  let fixture: ComponentFixture<RdevelsumissionstogovtitleholdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelsumissionstogovtitleholdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelsumissionstogovtitleholdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
