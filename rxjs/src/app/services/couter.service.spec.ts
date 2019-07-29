import { TestBed } from '@angular/core/testing';

import { CouterService } from './couter.service';

describe('CouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouterService = TestBed.get(CouterService);
    expect(service).toBeTruthy();
  });
});
