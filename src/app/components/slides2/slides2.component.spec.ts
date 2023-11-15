import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slides2Component } from './slides2.component';

describe('Slides2Component', () => {
  let component: Slides2Component;
  let fixture: ComponentFixture<Slides2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slides2Component]
    });
    fixture = TestBed.createComponent(Slides2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
