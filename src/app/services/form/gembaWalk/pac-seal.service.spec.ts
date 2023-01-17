import { TestBed } from '@angular/core/testing';

import { PacSealService } from './pac-seal.service';

describe('PacSealService', () => {
  let service: PacSealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacSealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
