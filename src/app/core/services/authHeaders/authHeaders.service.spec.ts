import { TestBed } from '@angular/core/testing';

import { AuthHeadersService } from './authHeaders.service';

describe('AuthHeadersService', () => {
  let service: AuthHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
