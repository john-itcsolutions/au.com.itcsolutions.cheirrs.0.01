import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectworkPage } from './inspectwork.page';

describe('InspectworkPage', () => {
  let component: InspectworkPage;
  let fixture: ComponentFixture<InspectworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
