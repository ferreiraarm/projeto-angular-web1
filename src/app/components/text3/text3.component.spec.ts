import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text3Component } from './text3.component';

describe('Text3Component', () => {
  let component: Text3Component;
  let fixture: ComponentFixture<Text3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Text3Component]
    });
    fixture = TestBed.createComponent(Text3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
