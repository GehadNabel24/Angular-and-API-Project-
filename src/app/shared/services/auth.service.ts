import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient,private _Router:Router) {}

  setRegister(userdata: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:5000/api/Account/register`,
      userdata
    );
  }
  setLogin(userdata: object): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:5000/api/Account/Login`,
      userdata
    );
  }
  LogOut():void
  {
    ////remove user token first
    localStorage.removeItem("token")

    //move user to Login Page
    this._Router.navigate(['/login'])
    
  }
}
