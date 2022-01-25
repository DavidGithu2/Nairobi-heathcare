import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { AppointmentGuard } from './appointment.guard';
import { CreatAppointmentComponent } from './creat-appointment/creat-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DoctorAppointmentComponent,
    WelcomeComponent,
    CreatAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'appointments',component: AppointmentListComponent},
      {
        path: 'appointments/:id',component: DoctorAppointmentComponent,
        canActivate: [AppointmentGuard]
      },
      {path: 'welcome',component: WelcomeComponent},
      {path:'add-appointment',component: CreatAppointmentComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '***', redirectTo: 'welcome', pathMatch: 'full'}

    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
