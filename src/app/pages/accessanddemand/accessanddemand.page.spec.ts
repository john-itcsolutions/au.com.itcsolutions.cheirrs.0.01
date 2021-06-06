import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessanddemandPage } from './accessanddemand.page';

describe('AccessanddemandPage', () => {
  let component: AccessanddemandPage;
  let fixture: ComponentFixture<AccessanddemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessanddemandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessanddemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
