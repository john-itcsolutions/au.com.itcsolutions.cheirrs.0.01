import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerheaderPage } from './ownerheader.page';

describe('OwnerheaderPage', () => {
  let component: OwnerheaderPage;
  let fixture: ComponentFixture<OwnerheaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerheaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerheaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
