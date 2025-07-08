import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contator01Component } from './contator01.component';

describe('Contator01Component', () => {
  let component: Contator01Component;
  let fixture: ComponentFixture<Contator01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contator01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contator01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
