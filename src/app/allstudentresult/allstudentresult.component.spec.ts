import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentresultComponent } from './allstudentresult.component';

describe('AllstudentresultComponent', () => {
  let component: AllstudentresultComponent;
  let fixture: ComponentFixture<AllstudentresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstudentresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
