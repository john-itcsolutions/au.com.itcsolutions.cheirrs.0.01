import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackaprocessPage } from './trackaprocess.page';

describe('TrackaprocessPage', () => {
  let component: TrackaprocessPage;
  let fixture: ComponentFixture<TrackaprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackaprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackaprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
