import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  Error: string = '';
  Loading: boolean = false;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {}
  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9-@]{6,10}$/)],
    ],
  });

  onLogin(): void {
    if (this.loginForm.valid) {
      this.Loading = true;
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next: (response) => {
          this.Loading = false;
          
         localStorage.setItem('token', response.token);
          console.log(response)
          this._Router.navigate(['/home']);
        
        },

        error: (err) => {
          this.Loading = false;
          this.Error = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
