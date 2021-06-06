import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmngmntriskPage } from './assetmngmntrisk.page';

describe('AssetmngmntriskPage', () => {
  let component: AssetmngmntriskPage;
  let fixture: ComponentFixture<AssetmngmntriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmngmntriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmngmntriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
