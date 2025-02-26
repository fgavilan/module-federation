import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-+login',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loginError: boolean = false;
  public isLoading = false

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginError = false;
      this.isLoading = true;
      const {email} = this.loginForm.value;
      this.authService.login(email).then(valid => {
        this.isLoading = false;
        if (valid) {
          this.router.navigate(['/users']);
        } else {
          this.loginError = true;
        }
      });
    } else {
      console.log('Invalid email');
    }
  }
}
