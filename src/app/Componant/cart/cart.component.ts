import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/CartService';
import { CartItem } from '../../shared/Interfaces/cart-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private _CartService: CartService) {}
  products: CartItem[] = [];

  ngOnInit(): void {
    this._CartService.getCartItems().subscribe({
      next: (responce) => {
        this.products = responce;
        console.log(responce);
      },
    });
  }

}
