import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoPage } from './part-two.page';

describe('PartTwoPage', () => {
  let component: PartTwoPage;
  let fixture: ComponentFixture<PartTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
