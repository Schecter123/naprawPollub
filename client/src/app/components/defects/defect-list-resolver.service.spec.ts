import { TestBed } from '@angular/core/testing';

import { DefectListResolverService } from './defect-list-resolver.service';

describe('DefectListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefectListResolverService = TestBed.get(DefectListResolverService);
    expect(service).toBeTruthy();
  });
});
