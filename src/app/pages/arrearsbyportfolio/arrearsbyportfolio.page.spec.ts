import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearsbyportfolioPage } from './arrearsbyportfolio.page';

describe('ArrearsbyportfolioPage', () => {
  let component: ArrearsbyportfolioPage;
  let fixture: ComponentFixture<ArrearsbyportfolioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrearsbyportfolioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrearsbyportfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
