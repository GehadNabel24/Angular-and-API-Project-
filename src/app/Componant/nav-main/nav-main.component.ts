import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from '../account/account.service';
import { BasketItem } from '../../shared/models/basket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css',
})
export class NavMainComponent {
  constructor(private _AuthService: AuthService) {}
  userLogout(): void {
    this._AuthService.LogOut()
  }
  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
