import { TestBed } from '@angular/core/testing';

import { FemininoService } from './feminino.service';

describe('FemininoService', () => {
  let service: FemininoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FemininoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
