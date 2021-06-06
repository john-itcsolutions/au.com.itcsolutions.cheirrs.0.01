import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardtrainingPage } from './boardtraining.page';

describe('BoardtrainingPage', () => {
  let component: BoardtrainingPage;
  let fixture: ComponentFixture<BoardtrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardtrainingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardtrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
