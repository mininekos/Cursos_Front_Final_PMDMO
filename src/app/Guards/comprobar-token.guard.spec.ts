import { TestBed } from '@angular/core/testing';

import { ComprobarTokenGuard } from './comprobar-token.guard';

describe('ComprobarTokenGuard', () => {
  let guard: ComprobarTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComprobarTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
