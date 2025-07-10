import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dodos2Component } from './dodos2.component';

describe('Dodos2Component', () => {
  let component: Dodos2Component;
  let fixture: ComponentFixture<Dodos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dodos2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dodos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
