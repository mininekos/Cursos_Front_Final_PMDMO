import { TestBed } from '@angular/core/testing';

import { HttpInterceptorTokenService } from './http-interceptor-token.service';

describe('HttpInterceptorTokenService', () => {
  let service: HttpInterceptorTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
