import { TestBed } from '@angular/core/testing';

import { TdkService } from './tdk.service';
import { AppInitService } from '../app-init.service';

describe('TdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppInitService
    ]
  }));

  it('should be created', () => {
    const service: TdkService = TestBed.get(TdkService);
    expect(service).toBeTruthy();
  });
});
