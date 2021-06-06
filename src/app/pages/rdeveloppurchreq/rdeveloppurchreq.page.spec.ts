import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdeveloppurchreqPage } from './rdeveloppurchreq.page';

describe('RdeveloppurchreqPage', () => {
  let component: RdeveloppurchreqPage;
  let fixture: ComponentFixture<RdeveloppurchreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdeveloppurchreqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdeveloppurchreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
