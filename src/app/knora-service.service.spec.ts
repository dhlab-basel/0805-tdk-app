import { TestBed } from '@angular/core/testing';

import { KnoraServiceService } from './knora-service.service';

describe('KnoraServiceService', () => {
  let service: KnoraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnoraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
