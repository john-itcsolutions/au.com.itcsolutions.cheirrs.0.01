import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopassembliefifthlevelPage } from './workshopassembliefifthlevel.page';

describe('WorkshopassembliefifthlevelPage', () => {
  let component: WorkshopassembliefifthlevelPage;
  let fixture: ComponentFixture<WorkshopassembliefifthlevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopassembliefifthlevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopassembliefifthlevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
