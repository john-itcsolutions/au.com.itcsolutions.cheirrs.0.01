import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialredevelprojectsPage } from './potentialredevelprojects.page';

describe('PotentialredevelprojectsPage', () => {
  let component: PotentialredevelprojectsPage;
  let fixture: ComponentFixture<PotentialredevelprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialredevelprojectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialredevelprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
