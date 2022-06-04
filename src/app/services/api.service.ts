import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const api = 'http://localhost:3000/users';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  signUp(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(api, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    });
  }

}
