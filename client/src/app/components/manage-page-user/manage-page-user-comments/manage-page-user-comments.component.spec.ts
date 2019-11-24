import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageUserCommentsComponent } from './manage-page-user-comments.component';

describe('ManagePageUserCommentsComponent', () => {
  let component: ManagePageUserCommentsComponent;
  let fixture: ComponentFixture<ManagePageUserCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageUserCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageUserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
