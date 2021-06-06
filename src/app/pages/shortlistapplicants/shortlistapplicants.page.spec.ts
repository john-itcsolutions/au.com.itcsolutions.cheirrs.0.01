import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistapplicantsPage } from './shortlistapplicants.page';

describe('ShortlistapplicantsPage', () => {
  let component: ShortlistapplicantsPage;
  let fixture: ComponentFixture<ShortlistapplicantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistapplicantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistapplicantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
