import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;

  passwordErrorMessage = 'Password is required';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getEmailErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'Email address is required';
    }

    return this.loginForm.get('email')?.hasError('email')
      ? 'Please enter a valid email address'
      : '';
  }

  // login() {
  //   this.http.get<any>('http://localhost:3000/users').subscribe(
  //     (res) => {
  //       const user = res.find((user: any) => {
  //         return (
  //           user.email === this.loginForm.value.email &&
  //           user.password === this.loginForm.value.password
  //         );
  //       });
  //       if (user) {
  //         alert('Login Success!');
  //         this.loginForm.reset();
  //         this.router.navigate(['signup']);
  //       } else {
  //         alert('User not found!');
  //       }
  //     },
  //     (err) => {
  //       alert('Something went wrong!');
  //     }
  //   );
  // }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
