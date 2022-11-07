import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2FinalVersionComponent } from './design2-final-version.component';

describe('Design2FinalVersionComponent', () => {
  let component: Design2FinalVersionComponent;
  let fixture: ComponentFixture<Design2FinalVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design2FinalVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design2FinalVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
