import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProduct():Observable<any>
  {
    
    return  this._HttpClient.get(`http://localhost:5000/api/Products`)
  }
  getCategoryDetails(id: string | null): Observable<any> {
    return this._HttpClient.get(`https://localhost:5000/api/Products/${id}`);
  }
  getAllProductCategory():Observable<any>
  {
    
    return  this._HttpClient.get(`https://localhost:5000/api/Products/types`)
  }

}
