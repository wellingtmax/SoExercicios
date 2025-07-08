import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contator04Component } from './contator04.component';

describe('Contator04Component', () => {
  let component: Contator04Component;
  let fixture: ComponentFixture<Contator04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contator04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contator04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
