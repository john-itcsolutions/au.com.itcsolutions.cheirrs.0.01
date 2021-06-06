import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniflexreportsfinPage } from './infiniflexreportsfin.page';

describe('InfiniflexreportsfinPage', () => {
  let component: InfiniflexreportsfinPage;
  let fixture: ComponentFixture<InfiniflexreportsfinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniflexreportsfinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniflexreportsfinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
