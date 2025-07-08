import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contator03Component } from './contator03.component';

describe('Contator03Component', () => {
  let component: Contator03Component;
  let fixture: ComponentFixture<Contator03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contator03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contator03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
