import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhstrainingPage } from './whstraining.page';

describe('WhstrainingPage', () => {
  let component: WhstrainingPage;
  let fixture: ComponentFixture<WhstrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhstrainingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhstrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
