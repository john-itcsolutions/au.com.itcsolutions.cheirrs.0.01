import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopassembliethirdlevelPage } from './workshopassembliethirdlevel.page';

describe('WorkshopassembliethirdlevelPage', () => {
  let component: WorkshopassembliethirdlevelPage;
  let fixture: ComponentFixture<WorkshopassembliethirdlevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopassembliethirdlevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopassembliethirdlevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
