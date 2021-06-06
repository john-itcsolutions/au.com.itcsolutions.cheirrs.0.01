import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueinvoicesrecdPage } from './overdueinvoicesrecd.page';

describe('OverdueinvoicesrecdPage', () => {
  let component: OverdueinvoicesrecdPage;
  let fixture: ComponentFixture<OverdueinvoicesrecdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueinvoicesrecdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueinvoicesrecdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
