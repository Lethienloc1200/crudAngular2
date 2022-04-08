import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Phone } from '../../category/phone/models/phone.class';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private REST_API_SERVER = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
  constructor(private httpClient: HttpClient, private router: Router) {}

  public getPhone(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/phoneList/` + id;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addPhone(data: Phone) {
    const url = `${this.REST_API_SERVER}/phoneList`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public EditPhone(phoneId: number, data: Phone) {
    const url = `${this.REST_API_SERVER}/phoneList/` + phoneId;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deletePhone(phoneId: string) {
    const url = `${this.REST_API_SERVER}/phoneList/` + phoneId;
    return this.httpClient
      .delete<Phone>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
