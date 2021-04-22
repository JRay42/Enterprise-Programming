import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserCredentials } from './user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  userCredentials: UserCredentials = new UserCredentials();
  errorMessage: string;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm(): FormGroup {
    return this.fb.group(
      {
        userName: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([Validators.required])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      }
    );
  }

  loginUser() {
    this.loginService.login(this.userCredentials).subscribe(() => {
      this.router.navigate(['/admin/todo'])
    },
      (error) => {
        this.errorMessage = error;
      });
  }
}
