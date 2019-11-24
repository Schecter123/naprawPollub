import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePagePlaceAdminDefectsComponent } from './manage-page-place-admin-defects.component';

describe('ManagePagePlaceAdminDefectsComponent', () => {
  let component: ManagePagePlaceAdminDefectsComponent;
  let fixture: ComponentFixture<ManagePagePlaceAdminDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePagePlaceAdminDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePagePlaceAdminDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
