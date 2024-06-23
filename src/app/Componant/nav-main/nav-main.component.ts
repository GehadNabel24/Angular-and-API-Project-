import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from '../account/account.service';
import { BasketItem } from '../../shared/models/basket';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/services/CartService';
import { count } from 'rxjs';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css',
})
export class NavMainComponent {
  constructor(private _AuthService: AuthService,private _CartService: CartService) {}
  userLogout(): void {
    this._AuthService.LogOut()
  }
  products: number=0;

  ngOnInit(): void {
    this._CartService.getCartItems().subscribe({
      next: (cartItems) => {
        this.products = cartItems.reduce((total, item) => cartItems.length, 0);
      },
      error: (err) => {
        console.error('Error fetching cart items', err);
      }
    });
  }
}
