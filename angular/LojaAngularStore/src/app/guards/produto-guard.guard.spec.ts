import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { produtoGuardGuard } from './produto-guard.guard';

describe('produtoGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => produtoGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
