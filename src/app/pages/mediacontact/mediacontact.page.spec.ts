import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacontactPage } from './mediacontact.page';

describe('MediacontactPage', () => {
  let component: MediacontactPage;
  let fixture: ComponentFixture<MediacontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediacontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
