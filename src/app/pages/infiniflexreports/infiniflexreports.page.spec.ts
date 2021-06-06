import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniflexreportsPage } from './infiniflexreports.page';

describe('InfiniflexreportsPage', () => {
  let component: InfiniflexreportsPage;
  let fixture: ComponentFixture<InfiniflexreportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniflexreportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniflexreportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
