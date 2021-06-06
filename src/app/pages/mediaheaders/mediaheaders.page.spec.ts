import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaheadersPage } from './mediaheaders.page';

describe('MediaheadersPage', () => {
  let component: MediaheadersPage;
  let fixture: ComponentFixture<MediaheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
