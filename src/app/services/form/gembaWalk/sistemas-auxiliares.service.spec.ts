import { TestBed } from '@angular/core/testing';

import { SistemasAuxiliaresService } from './sistemas-auxiliares.service';

describe('SistemasAuxiliaresService', () => {
  let service: SistemasAuxiliaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasAuxiliaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
