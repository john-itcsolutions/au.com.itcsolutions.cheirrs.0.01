import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovheadersPage } from './govheaders.page';

describe('GovheadersPage', () => {
  let component: GovheadersPage;
  let fixture: ComponentFixture<GovheadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovheadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovheadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
