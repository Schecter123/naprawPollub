import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageAdminDefectsComponent } from './manage-page-admin-defects.component';

describe('ManagePageAdminDefectsComponent', () => {
  let component: ManagePageAdminDefectsComponent;
  let fixture: ComponentFixture<ManagePageAdminDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageAdminDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageAdminDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
