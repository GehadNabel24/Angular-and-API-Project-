import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  submitError: string = '';
  Loading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9@]{6,10}$/),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9@]{6,10}$/),
    ]),
    phone: new FormControl([
      '',
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ]),
    
  });

  handleForm(): void {
    if (this.registerForm.valid) {
      this.Loading = true;
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          this.Loading = false;
          console.log(response);
          this._Router.navigate(['/login']);
        },

        error: (err) => {
          this.Loading = false;
          this.submitError = err.error.message;
        },
      });
    }
  }
}
