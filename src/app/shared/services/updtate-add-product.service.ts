import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newProduct } from '../Interfaces/newProduct';

@Injectable({
  providedIn: 'root',
})
export class UpdtateAddProductService {
  constructor(private _HttpClient: HttpClient) {}

 addProduct( productDetails: newProduct): Observable<any> {
    return this._HttpClient.post(`http://localhost:5000/api/Products`, productDetails);
  }
  updateProduct(productId: number, productDetails: any): Observable<any> {
    return this._HttpClient.put(`http://localhost:5000/api/Products/${productId}`, productDetails);
  }
  getProductDetails(productId: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/api/Products/${productId}`);
  }
}
