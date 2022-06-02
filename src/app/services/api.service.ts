import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiSignup = 'http://localhost:3000/usersSignup';
const apiLogin = 'http://localhost:3000/usersLogin';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any>{
    return this.http.post(apiLogin,{
      email,
      password
    });
  }

  signUp(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(apiSignup, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    });
  }

}
