import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sllides1Component } from './sllides1.component';

describe('Sllides1Component', () => {
  let component: Sllides1Component;
  let fixture: ComponentFixture<Sllides1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sllides1Component]
    });
    fixture = TestBed.createComponent(Sllides1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
