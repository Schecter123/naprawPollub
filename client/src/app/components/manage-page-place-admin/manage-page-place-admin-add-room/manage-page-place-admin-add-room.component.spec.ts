import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePagePlaceAdminAddRoomComponent } from './manage-page-place-admin-add-room.component';

describe('ManagePagePlaceAdminAddRoomComponent', () => {
  let component: ManagePagePlaceAdminAddRoomComponent;
  let fixture: ComponentFixture<ManagePagePlaceAdminAddRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePagePlaceAdminAddRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePagePlaceAdminAddRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
