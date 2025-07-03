import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contato0sComponent } from './contato0s.component';

describe('Contato0sComponent', () => {
  let component: Contato0sComponent;
  let fixture: ComponentFixture<Contato0sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contato0sComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contato0sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
