import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { NavAuthenComponent } from '../nav-authen/nav-authen.component';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';
import { BrandsComponent } from '../brands/brands.component';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authen-layout',
  standalone: true,
  imports: [RouterOutlet,NavAuthenComponent,ProductsComponent,CartComponent,BrandsComponent,HomeComponent,FooterComponent],
  templateUrl: './authen-layout.component.html',
  styleUrl: './authen-layout.component.css'
})
export class AuthenLayoutComponent {

}
