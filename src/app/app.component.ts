import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`

  <nav class='navbar navbar-expand navbar-light bg-lightcd '>
  <div class="collapse navbar-collapse" id="navbarCollapese">
      <a class='navbar-brand nav-pills'>{{pageTitle}}</a>
      <ul class='nav nav-pills navbar-nav'>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/appointments'>Appointments</a></li>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/add-appointment'>Creat Appointment</a></li>
      </ul>
      </div>
  </nav>

  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `

})
export class AppComponent {
  pageTitle = 'Nairobi HealthCare System';
}
