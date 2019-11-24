import { TestBed } from '@angular/core/testing';

import { ManagePageAdminGuardService } from './manage-page-admin-guard.service';

describe('ManagePageAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePageAdminGuardService = TestBed.get(ManagePageAdminGuardService);
    expect(service).toBeTruthy();
  });
});
