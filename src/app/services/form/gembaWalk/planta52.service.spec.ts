import { TestBed } from '@angular/core/testing';

import { Planta52Service } from './planta52.service';

describe('Planta52Service', () => {
  let service: Planta52Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Planta52Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
