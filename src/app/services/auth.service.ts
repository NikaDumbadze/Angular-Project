import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  private readonly TOKEN_NAME = 'profanis_auth';

  constructor(private apiService: ApiService) {
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((response)=> {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response);
      })
    );
  }

  signUp(firstname: string, lastName: string,email: string, password: string, confirmPassword: string) {
    return this.apiService.signUp(firstname, lastName, email, password, confirmPassword).pipe(
      tap((response)=> {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response as string);
      })
    );
  }


}
