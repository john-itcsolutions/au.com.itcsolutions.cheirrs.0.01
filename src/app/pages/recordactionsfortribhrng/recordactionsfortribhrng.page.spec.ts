import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordactionsfortribhrngPage } from './recordactionsfortribhrng.page';

describe('RecordactionsfortribhrngPage', () => {
  let component: RecordactionsfortribhrngPage;
  let fixture: ComponentFixture<RecordactionsfortribhrngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordactionsfortribhrngPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordactionsfortribhrngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
