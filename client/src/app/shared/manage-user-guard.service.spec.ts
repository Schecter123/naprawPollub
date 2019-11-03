import { TestBed } from '@angular/core/testing';

import { ManageUserGuardService } from './manage-user-guard.service';

describe('ManageUserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageUserGuardService = TestBed.get(ManageUserGuardService);
    expect(service).toBeTruthy();
  });
});
