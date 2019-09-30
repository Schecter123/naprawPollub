import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectItemComponent } from './defect-item.component';

describe('DefectItemComponent', () => {
  let component: DefectItemComponent;
  let fixture: ComponentFixture<DefectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
