import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageUserComponent } from './manage-page-user.component';

describe('ManagePageUserComponent', () => {
  let component: ManagePageUserComponent;
  let fixture: ComponentFixture<ManagePageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
