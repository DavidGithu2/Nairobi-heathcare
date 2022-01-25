import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAppointmentComponent } from './creat-appointment.component';

describe('CreatAppointmentComponent', () => {
  let component: CreatAppointmentComponent;
  let fixture: ComponentFixture<CreatAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
