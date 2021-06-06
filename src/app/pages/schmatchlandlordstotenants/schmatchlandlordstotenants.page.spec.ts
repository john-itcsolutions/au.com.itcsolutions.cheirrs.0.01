import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmatchlandlordstotenantsPage } from './schmatchlandlordstotenants.page';

describe('SchmatchlandlordstotenantsPage', () => {
  let component: SchmatchlandlordstotenantsPage;
  let fixture: ComponentFixture<SchmatchlandlordstotenantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmatchlandlordstotenantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmatchlandlordstotenantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
