import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmchllordstotenantsPage } from './schmchllordstotenants.page';

describe('SchmchllordstotenantsPage', () => {
  let component: SchmchllordstotenantsPage;
  let fixture: ComponentFixture<SchmchllordstotenantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmchllordstotenantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmchllordstotenantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
