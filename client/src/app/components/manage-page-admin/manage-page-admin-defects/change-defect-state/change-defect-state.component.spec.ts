import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDefectStateComponent } from './change-defect-state.component';

describe('ChangeDefectStateComponent', () => {
  let component: ChangeDefectStateComponent;
  let fixture: ComponentFixture<ChangeDefectStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDefectStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDefectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
