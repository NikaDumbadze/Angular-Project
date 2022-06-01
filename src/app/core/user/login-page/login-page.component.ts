import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  email   = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  passwordErrorMessage = 'Password is required';

  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email address is required';
    }

    return this.email.hasError('email') ? 'Please enter a valid email address' : '';
  }

  
  


}

