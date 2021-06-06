import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleavehistoryPage } from './myleavehistory.page';

describe('MyleavehistoryPage', () => {
  let component: MyleavehistoryPage;
  let fixture: ComponentFixture<MyleavehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyleavehistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyleavehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
