import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAppointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'pm-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit, OnDestroy {
  pageTitle ='Appointment Lists';
  showNames: boolean = false;
  errorMessage: string='';
  sub!: Subscription;

  private _listFilter: string= '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter=value;
    this.filteredAppointments=this.performFilter(value);
  }

  filteredAppointments :IAppointment[]=[];

  Appointments:IAppointment[]=[];

  performFilter(filterBy: string): IAppointment[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.Appointments.filter((appointment:IAppointment)=>
    appointment.appointmentt.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private appointmentservice: AppointmentService) { }

  ngOnInit(): void {
   this.sub = this.appointmentservice.getAppointments().subscribe({
      next: Appointments =>{
        this.Appointments=Appointments
        this.filteredAppointments= this.Appointments;
      },
      error: err =>this.errorMessage=err

    });

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  toggleNames() :void{
     this.showNames = !this.showNames;
  }

}
