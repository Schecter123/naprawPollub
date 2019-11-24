import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePagePlaceAdminComponent } from './manage-page-place-admin.component';

describe('ManagePagePlaceAdminComponent', () => {
  let component: ManagePagePlaceAdminComponent;
  let fixture: ComponentFixture<ManagePagePlaceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePagePlaceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePagePlaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
