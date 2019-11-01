import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAdministationComponent } from './account-administation.component';

describe('AccountAdministationComponent', () => {
  let component: AccountAdministationComponent;
  let fixture: ComponentFixture<AccountAdministationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAdministationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAdministationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
