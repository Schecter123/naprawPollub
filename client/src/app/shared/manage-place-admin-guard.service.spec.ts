import { TestBed } from '@angular/core/testing';

import { ManagePlaceAdminGuard} from './manage-place-admin-guard.service';

describe('ManagePlaceAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePlaceAdminGuard = TestBed.get(ManagePlaceAdminGuard);
    expect(service).toBeTruthy();
  });
});
