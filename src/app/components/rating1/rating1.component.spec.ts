import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating1Component } from './rating1.component';

describe('Rating1Component', () => {
  let component: Rating1Component;
  let fixture: ComponentFixture<Rating1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rating1Component]
    });
    fixture = TestBed.createComponent(Rating1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
