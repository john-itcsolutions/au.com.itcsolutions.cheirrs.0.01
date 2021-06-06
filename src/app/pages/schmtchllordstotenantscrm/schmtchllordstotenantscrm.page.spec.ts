import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmtchllordstotenantscrmPage } from './schmtchllordstotenantscrm.page';

describe('SchmtchllordstotenantscrmPage', () => {
  let component: SchmtchllordstotenantscrmPage;
  let fixture: ComponentFixture<SchmtchllordstotenantscrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmtchllordstotenantscrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmtchllordstotenantscrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
