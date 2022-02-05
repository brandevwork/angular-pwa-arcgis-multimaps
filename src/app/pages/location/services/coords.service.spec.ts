import { TestBed } from '@angular/core/testing';

import { CoordsService } from './coords.service';

describe('CoordsService', () => {
  let service: CoordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
