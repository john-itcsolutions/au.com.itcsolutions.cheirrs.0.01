import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervacantorvoidPage } from './registervacantorvoid.page';

describe('RegistervacantorvoidPage', () => {
  let component: RegistervacantorvoidPage;
  let fixture: ComponentFixture<RegistervacantorvoidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistervacantorvoidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervacantorvoidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
