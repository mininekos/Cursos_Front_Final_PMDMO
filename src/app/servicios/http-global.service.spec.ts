import { TestBed } from '@angular/core/testing';

import { HttpGlobalService } from './http-global.service';

describe('HttpGlobalService', () => {
  let service: HttpGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
