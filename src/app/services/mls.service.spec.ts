import { TestBed } from '@angular/core/testing';

import { MlsService } from './mls.service';
import { AppInitService } from '../app-init.service';

describe('MlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppInitService
    ]
  }));

  it('should be created', () => {
    const service: MlsService = TestBed.get(MlsService);
    expect(service).toBeTruthy();
  });
});
