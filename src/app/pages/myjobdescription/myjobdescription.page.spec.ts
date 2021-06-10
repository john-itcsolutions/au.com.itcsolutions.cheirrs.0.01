import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobdescriptionPage } from './myjobdescription.page';

describe('MyjobdescriptionPage', () => {
  let component: MyjobdescriptionPage;
  let fixture: ComponentFixture<MyjobdescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobdescriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjobdescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
