import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageAdminAddPlaceAdminComponent } from './manage-page-admin-add-place-admin.component';

describe('ManagePageAdminAddPlaceAdminComponent', () => {
  let component: ManagePageAdminAddPlaceAdminComponent;
  let fixture: ComponentFixture<ManagePageAdminAddPlaceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageAdminAddPlaceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageAdminAddPlaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
