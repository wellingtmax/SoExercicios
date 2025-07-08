import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contator02Component } from './contator02.component';

describe('Contator02Component', () => {
  let component: Contator02Component;
  let fixture: ComponentFixture<Contator02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contator02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contator02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
