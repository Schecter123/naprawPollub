import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';

describe('RaitingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingService = TestBed.get(RatingService);
    expect(service).toBeTruthy();
  });
});
