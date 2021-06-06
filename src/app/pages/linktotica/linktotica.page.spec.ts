import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoticaPage } from './linktotica.page';

describe('LinktoticaPage', () => {
  let component: LinktoticaPage;
  let fixture: ComponentFixture<LinktoticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoticaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
