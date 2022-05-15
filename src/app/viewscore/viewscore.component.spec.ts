import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscoreComponent } from './viewscore.component';

describe('ViewscoreComponent', () => {
  let component: ViewscoreComponent;
  let fixture: ComponentFixture<ViewscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
