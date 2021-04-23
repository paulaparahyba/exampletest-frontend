import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { PersonPhoneRequest } from './person.request';
import { PersonPhoneResponse } from './personPhoneResponse';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = "http://localhost:5000/api/personphone"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 300,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['.msg-error'] : ['.msg-success']
    })
  }

  create(personPhone: PersonPhoneRequest): Observable<PersonPhoneResponse> {
    return this.http.post<PersonPhoneResponse>(this.baseUrl + '/Create', personPhone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Erro ao realizar operação', true)
    return EMPTY
  }

  edit(personPhone: PersonPhoneRequest): Observable<PersonPhoneResponse> {
    const url = `${this.baseUrl}/Edit`
    return this.http.put<PersonPhoneResponse>(url, personPhone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<PersonPhoneResponse> {
    return this.http.get<PersonPhoneResponse>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<PersonPhoneResponse> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<PersonPhoneResponse>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  } 

  delete(id: string): Observable<PersonPhoneResponse> {
    const url = `${this.baseUrl}/Delete/${id}`
    return this.http.delete<PersonPhoneResponse>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
