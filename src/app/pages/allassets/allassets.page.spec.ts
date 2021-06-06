import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllassetsPage } from './allassets.page';

describe('AllassetsPage', () => {
  let component: AllassetsPage;
  let fixture: ComponentFixture<AllassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
