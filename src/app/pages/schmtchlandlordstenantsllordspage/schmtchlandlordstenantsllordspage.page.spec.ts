import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmtchlandlordstenantsllordspagePage } from './schmtchlandlordstenantsllordspage.page';

describe('SchmtchlandlordstenantsllordspagePage', () => {
  let component: SchmtchlandlordstenantsllordspagePage;
  let fixture: ComponentFixture<SchmtchlandlordstenantsllordspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmtchlandlordstenantsllordspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmtchlandlordstenantsllordspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
