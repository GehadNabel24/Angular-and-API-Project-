import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../Interfaces/cart-item';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();
  headers: any = { token: localStorage.getItem('token') };

  constructor(private _HttpClient: HttpClient) {
    this.loadCartItems(); // Load initial cart items when service is instantiated
  }

  private loadCartItems() {
    this._HttpClient.get<CartItem[]>('http://localhost:5000/api/CartItem', {
      headers: this.headers,
    }).subscribe(items => {
      this.cartItemsSubject.next(items);
    });
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  addToCart(productId: number): Observable<any> {
    console.log('Item added');
    return this._HttpClient.post('http://localhost:5000/api/CartItem', {
      id: 2,
      quantity: 1,
      cartId: 1,
      productId: productId,
    }, {
      headers: this.headers,
    }).pipe(
      switchMap(async () => this.loadCartItems())
    );
  }

  getCartItemByProductId(productId: number): Observable<CartItem> {
    return this._HttpClient.get<CartItem>(`http://localhost:5000/api/CartItem/byProduct/${productId}`, {
      headers: this.headers,
    });
  }

  updateCart(productId: number): Observable<any> {
    return this.getCartItemByProductId(productId).pipe(
      switchMap((cartItem: CartItem) => {
        cartItem.quantity += 1;
        return this._HttpClient.put(`http://localhost:5000/api/CartItem/${cartItem.id}`, cartItem, {
          headers: this.headers,
        }).pipe(
          switchMap(async () => this.loadCartItems())
        );
      })
    );
  }
}
