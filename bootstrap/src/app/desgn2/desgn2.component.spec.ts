import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desgn2Component } from './desgn2.component';

describe('Desgn2Component', () => {
  let component: Desgn2Component;
  let fixture: ComponentFixture<Desgn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Desgn2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desgn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
