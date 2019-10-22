import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectCommentComponent } from './defect-comment.component';

describe('DefectCommentComponent', () => {
  let component: DefectCommentComponent;
  let fixture: ComponentFixture<DefectCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
