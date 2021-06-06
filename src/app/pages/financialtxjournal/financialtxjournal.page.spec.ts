import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialtxjournalPage } from './financialtxjournal.page';

describe('FinancialtxjournalPage', () => {
  let component: FinancialtxjournalPage;
  let fixture: ComponentFixture<FinancialtxjournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialtxjournalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialtxjournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
