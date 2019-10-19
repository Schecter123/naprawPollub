import { TestBed } from '@angular/core/testing';

import { DefectResolverService } from './defect-resolver.service';

describe('DefectResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefectResolverService = TestBed.get(DefectResolverService);
    expect(service).toBeTruthy();
  });
});
