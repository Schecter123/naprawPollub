import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageAdminCommentsComponent } from './manage-page-admin-comments.component';

describe('ManagePageAdminCommentsComponent', () => {
  let component: ManagePageAdminCommentsComponent;
  let fixture: ComponentFixture<ManagePageAdminCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageAdminCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageAdminCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
