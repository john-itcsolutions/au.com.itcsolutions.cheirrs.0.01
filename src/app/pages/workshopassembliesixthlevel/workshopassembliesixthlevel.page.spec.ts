import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopassembliesixthlevelPage } from './workshopassembliesixthlevel.page';

describe('WorkshopassembliesixthlevelPage', () => {
  let component: WorkshopassembliesixthlevelPage;
  let fixture: ComponentFixture<WorkshopassembliesixthlevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopassembliesixthlevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopassembliesixthlevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
