import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import{catchError, map, tap} from 'rxjs/operators';
import { IAppointment } from './appointment';
import { appointments } from './appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentUrl='api/products/products.json';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable <IAppointment[]>{
    return this.http.get<IAppointment[]>(this.appointmentUrl).pipe(
      tap(data=> console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  getAppointment(id: number): Observable<IAppointment | undefined> {
    return this.getAppointments()
      .pipe(
        map((appointment: IAppointment[]) => appointment.find(p => p.doctorsId === id))
      );
  }

  postAppointments(appointment:appointments):Observable<appointments>{
   const headers =new HttpHeaders({'content-type': '/json'});
   appointment.doctorsId=0;
   return this.http.post<appointments>(this.appointmentUrl,appointment, {headers: headers})
     .pipe(
       tap(data=>console.log('createAppointment:'+ JSON.stringify(data))),
     );

  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  initilizedAppointment(): appointments{
    return{
      doctorsId:0,
      appointmentt:'',
      Day: '',
      unit:0,
      diagonosiss:'',
      status:'',
      Doctor: ''
    }
  }
}
