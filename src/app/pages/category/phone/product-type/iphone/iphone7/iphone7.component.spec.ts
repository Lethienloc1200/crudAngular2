import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone7Component } from './iphone7.component';

describe('Iphone7Component', () => {
  let component: Iphone7Component;
  let fixture: ComponentFixture<Iphone7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
