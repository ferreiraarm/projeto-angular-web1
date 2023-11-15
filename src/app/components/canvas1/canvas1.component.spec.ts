import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas1Component } from './canvas1.component';

describe('Canvas1Component', () => {
  let component: Canvas1Component;
  let fixture: ComponentFixture<Canvas1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Canvas1Component]
    });
    fixture = TestBed.createComponent(Canvas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
