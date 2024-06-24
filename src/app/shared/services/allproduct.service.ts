import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newProduct } from '../Interfaces/newProduct';

@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  constructor(private _HttpClient:HttpClient) { }
  product:any={
    
    name: "",
    price: 120,
    image: "",    
    rating: 4,   
    quantity: 10,
    discount: 10,
    category: "bag",
    description:""  
  };
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
  removeProduct(id: number | null):Observable<any>
  {
    
    return  this._HttpClient.delete(`http://localhost:5000/api/Products/${id}`)
    
  }
 
  getProductDetails(productId: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/api/Products/${productId}`);    
  
  }
 


}
