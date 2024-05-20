import { CanActivateFn, Router } from '@angular/router';
import {  NgModule,inject ,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export const authUserGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router);

  if (localStorage.getItem('token') != null) return true;
  else
  { 
    _Router.navigate(['/login'])
    return false;
  }
};
