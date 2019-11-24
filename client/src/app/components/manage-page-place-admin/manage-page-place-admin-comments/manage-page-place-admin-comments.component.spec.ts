import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePagePlaceAdminCommentsComponent } from './manage-page-place-admin-comments.component';

describe('ManagePagePlaceAdminCommentsComponent', () => {
  let component: ManagePagePlaceAdminCommentsComponent;
  let fixture: ComponentFixture<ManagePagePlaceAdminCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePagePlaceAdminCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePagePlaceAdminCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
