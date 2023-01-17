import { TestBed } from '@angular/core/testing';

import { GasPacService } from './gas-pac.service';

describe('GasPacService', () => {
  let service: GasPacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasPacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
