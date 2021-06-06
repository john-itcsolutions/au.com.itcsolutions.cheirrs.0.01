import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacomplaintPage } from './mediacomplaint.page';

describe('MediacomplaintPage', () => {
  let component: MediacomplaintPage;
  let fixture: ComponentFixture<MediacomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediacomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
