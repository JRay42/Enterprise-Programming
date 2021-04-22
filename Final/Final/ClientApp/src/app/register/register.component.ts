import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { UserCredentials } from '../login/user-credentials';
import { RegisterFormValidators } from './register-form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm: FormGroup;

  userCredentials: UserCredentials = new UserCredentials();
  errorMessage: string;

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.createSignupForm();
  }

  ngOnInit() {
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        userName: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            RegisterFormValidators.passwordPatternValidator(/[A-Z]/, {
              hasUpperCase: true
            }),
            RegisterFormValidators.passwordPatternValidator(/[a-z]/, {
              hasLowerCase: true
            }),
            RegisterFormValidators.passwordPatternValidator(/\d/, {
              hasNumber: true
            }),
            RegisterFormValidators.passwordPatternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        validator: RegisterFormValidators.passwordMatchValidator
      }
    );
  }

  createUser() {
    this.loginService.createUser(this.userCredentials).subscribe(() => {
      this.router.navigate(['/login']);
    },
      (error) => {
        this.errorMessage = error;
      })
  }
}
