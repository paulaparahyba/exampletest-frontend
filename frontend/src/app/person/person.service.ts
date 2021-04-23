import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PersonPhoneRequest } from './person.request';
import { PersonPhone } from './personPhone';
import { PersonPhoneResponse } from './personPhoneResponse';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = "http://localhost:5000/api/personphone"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 300,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(personPhone: PersonPhoneRequest): Observable<PersonPhoneResponse> {
    return this.http.post<PersonPhoneResponse>(this.baseUrl + '/create', personPhone)
  }

  edit(personPhone: PersonPhoneRequest): Observable<PersonPhoneResponse> {
    return this.http.post<PersonPhoneResponse>(this.baseUrl + '/edit', personPhone)
  }

  read(): Observable<PersonPhoneResponse> {
    return this.http.get<PersonPhoneResponse>(this.baseUrl)
  }

  delete(id: number): Observable<PersonPhoneResponse> {
    return this.http.post<PersonPhoneResponse>(this.baseUrl + '/delete', id)
  }
}
