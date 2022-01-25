import { Component, OnInit } from '@angular/core';
import { appointments } from '../appointments';
import { FormGroup,FormControl, NgForm, Form} from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-creat-appointment',
  templateUrl: './creat-appointment.component.html',
  styleUrls: ['./creat-appointment.component.css']
})
export class CreatAppointmentComponent implements OnInit {

   originalAppointment: appointments ={
     Doctor: '',
     appointmentt: '',
     Day: '',
     unit: 0,
     diagonosiss: '',
     status : '',
     doctorsId:0
   };

   appointment : appointments ={...this.originalAppointment};
  errorMessage: any;


  constructor(private appointmentService:AppointmentService ) { }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm) {
    if (form.valid) {
      if (form.dirty) {
        const p = { ...this.appointment, ...form.value };

        if (p.id === 0) {
          this.appointmentService.postAppointments(p)
            .subscribe({
              next: () => this.onSubmit(form),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSubmit(form);
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  navigate(): void{
    
  }


}
function value(value: any): void {
  throw new Error('Function not implemented.');
}

