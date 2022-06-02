import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ICustomKeys } from 'src/app/models/ICustomKeys';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

function passwordMatcher(
  c: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');

  if (passwordControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;
  passwordMessage!: string;

  private validationMessages = {
    required: 'Eenter your password',
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authServise: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],

      passwordGroup: this.fb.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        { validator: passwordMatcher }
      ),
    });

    const passwordControl = this.signupForm.get('passwordGroup.password');
    passwordControl?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setMessage(passwordControl));
  }

  setMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors)
        .map((key) => this.validationMessages[key as keyof ICustomKeys])
        .join(' ');
    }
  }

  signUp() {
    this.authServise.signUp(
      this.signupForm.get('firstName')?.value,
      this.signupForm.get('lastName')?.value,
      this.signupForm.get('email')?.value,
      this.signupForm.get('passwordGroup.password')?.value,
      this.signupForm.get('passwordGroup.confirmPassword')?.value,
    ).subscribe((respnse)=> {
      this.signupForm.reset();
      this.router.navigate(['/dashboard']);
    })
    
  }
}
