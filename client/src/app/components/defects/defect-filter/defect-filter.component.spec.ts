import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectFilterComponent } from './defect-filter.component';

describe('DefectFilterComponent', () => {
  let component: DefectFilterComponent;
  let fixture: ComponentFixture<DefectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
