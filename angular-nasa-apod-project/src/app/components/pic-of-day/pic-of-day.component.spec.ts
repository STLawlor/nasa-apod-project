import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicOfDayComponent } from './pic-of-day.component';

describe('PicOfDayComponent', () => {
  let component: PicOfDayComponent;
  let fixture: ComponentFixture<PicOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicOfDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
