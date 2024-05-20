import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../Interfaces/cart-item';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) { }

  headers: any = { token: localStorage.getItem('token') };
  cart: CartItem = {
    id: 1,
    quantity: 1,
    cartId: 1,
    productId: 0
  };

  addtocart(productId: number): Observable<any> {
    console.log('Item added');
    return this._HttpClient.post(
      `http://localhost:5000/api/CartItem`,
      {
        id: 2,
        quantity: 1,
        cartId: 1,
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }

  getCartItemByProductId(productId: number): Observable<CartItem> {
 
    return  this._HttpClient.get<CartItem>(
      `http://localhost:5000/api/CartItem/byProduct/${productId}`,
      {
        headers: this.headers,
      }
    );
  }

  updatecart(productId: number): Observable<any> {
    return this.getCartItemByProductId(productId).pipe(
      switchMap((cartItem: CartItem) => {
        cartItem.quantity += 1;
        return this._HttpClient.put(
          `http://localhost:5000/api/CartItem/${cartItem.id } `,
          cartItem,
          {
            headers: this.headers,
          }
        );
      })
    );
  }
}
