import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textos1Component } from './textos1.component';

describe('Textos1Component', () => {
  let component: Textos1Component;
  let fixture: ComponentFixture<Textos1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Textos1Component]
    });
    fixture = TestBed.createComponent(Textos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
