import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCommandComponent } from './css-command.component';

describe('CssCommandComponent', () => {
  let component: CssCommandComponent;
  let fixture: ComponentFixture<CssCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
