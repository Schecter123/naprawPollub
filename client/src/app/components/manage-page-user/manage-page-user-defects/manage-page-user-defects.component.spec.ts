import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageUserDefectsComponent } from './manage-page-user-defects.component';

describe('ManagePageUserDefectsComponent', () => {
  let component: ManagePageUserDefectsComponent;
  let fixture: ComponentFixture<ManagePageUserDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePageUserDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageUserDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
