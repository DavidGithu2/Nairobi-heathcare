import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
    pageTitle : string ='Doctors appointments';
    appointment:IAppointment | undefined
  errorMessage: any;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private appointmentservice: AppointmentService) { }

 ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      if (id) {
       this.getAppointment(id);
         }
     }

  getAppointment(id: number): void {
    this.appointmentservice.getAppointment(id).subscribe({
    next: appointment => this.appointment = appointment,
     error: err => this.errorMessage = err
         });
      }

  onBack(): void {
     this.router.navigate(['/appointments']);
   }
}
