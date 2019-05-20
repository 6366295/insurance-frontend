import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
  observe: 'response' as 'body'
};

@Injectable({
  providedIn: 'root'
})

export class FormService {
  customer: Customer = {
    initials: '',
    surname: '',
    dateOfBirth: '',
    nationality: '',
    bsn: '',
    zipcode: '',
    housenumber: '',
    streetname: '',
    city: '',
    telephoneNumber: '',
    email: '',
    iban: ''
  };

  invalidCustomer: Customer = {
    initials: '',
    surname: '',
    dateOfBirth: '',
    nationality: '',
    bsn: '',
    zipcode: '',
    housenumber: '',
    streetname: '',
    city: '',
    telephoneNumber: '',
    email: '',
    iban: ''
  };

  private apiUrl = 'http://localhost:7071/customers';

  constructor(private http: HttpClient) { }

  addCustomer(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.customer, httpOptions).pipe(
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      for (let message of error.error.details) {
        switch (message.memberNames[0]) {
          case 'initials': {
            this.invalidCustomer.initials = message.errorMessage;
            break;
          }
          case 'surname': {
            this.invalidCustomer.surname = message.errorMessage;
            break;
          }
          case 'dateOfBirth': {
            this.invalidCustomer.dateOfBirth = message.errorMessage;
            break;
          }
          case 'nationality': {
            this.invalidCustomer.nationality = message.errorMessage;
            break;
          }
          case 'bsn': {
            this.invalidCustomer.bsn = message.errorMessage;
            break;
          }
          case 'zipCode': {
            this.invalidCustomer.zipcode = message.errorMessage;
            break;
          }
          case 'houseNumber': {
            this.invalidCustomer.housenumber = message.errorMessage;
            break;
          }
          case 'streetName': {
            this.invalidCustomer.streetname = message.errorMessage;
            break;
          }
          case 'city': {
            this.invalidCustomer.city = message.errorMessage;
            break;
          }
          case 'telephoneNumber': {
            this.invalidCustomer.telephoneNumber = message.errorMessage;
            break;
          }
          case 'email': {
            this.invalidCustomer.email = message.errorMessage;
            break;
          }
          case 'iban': {
            this.invalidCustomer.iban = message.errorMessage;
            break;
          }

        }

      }
      console.error(this.invalidCustomer);

      return of(result as T);
    };
  }
}
