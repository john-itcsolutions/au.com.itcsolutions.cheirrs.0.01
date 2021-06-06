import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpdiPage } from './bpdi.page';

describe('BpdiPage', () => {
  let component: BpdiPage;
  let fixture: ComponentFixture<BpdiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpdiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpdiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
