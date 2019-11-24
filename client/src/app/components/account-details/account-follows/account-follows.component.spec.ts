import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFollowsComponent } from './account-follows.component';

describe('AccountFollowsComponent', () => {
  let component: AccountFollowsComponent;
  let fixture: ComponentFixture<AccountFollowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFollowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
