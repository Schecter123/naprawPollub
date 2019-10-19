import { TestBed } from '@angular/core/testing';

import { PlaceResolverService } from './place-resolver.service';

describe('PlaceResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceResolverService = TestBed.get(PlaceResolverService);
    expect(service).toBeTruthy();
  });
});
